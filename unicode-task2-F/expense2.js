// inputs
var table=document.querySelector(".table");
var title=document.querySelector(".title");
var price=document.querySelector(".price");
var quantity=document.querySelector(".quantity");
var amount=document.querySelector(".amount");
var income=document.querySelector(".income");
var balance=document.querySelector(".balance");
var saving=document.querySelector(".saving");
var savingDisplay=document.querySelector(".savingDisplay");
var incomeDisplay=document.querySelector(".incomeDisplay");
var newEntryButton=document.querySelector(".newEntry");

//to display the saving and income value 
var submitIS=document.querySelector(".submitIS");
submitIS.addEventListener("click",function(){
 var iV=income.value;
var sV=saving.value;
 var incoming=Number(iV);
var savings=Number(sV);
incomeDisplay.innerHTML=incoming;
savingDisplay.innerHTML=savings;
balance.innerHTML=Number(incoming+savings);
income.value=" ";
saving.value=" ";

})




newEntryButton.addEventListener("click",function(){
var title=document.querySelector(".title");
var price=document.querySelector(".price");
var quantity=document.querySelector(".quantity");
 var amount=document.querySelector(".amount");
var iV=income.value;
var sV=saving.value;
pV=price.value;
var tV=title.value;
qV=quantity.value;
 // to check if the user has completed input 
 if((incomeDisplay.innerHTML==0 && savingDisplay.innerHTML==0)){
    alert("ENTER INCOME & SAVING AMOUNT")
    }
 else{
    if(price.value==0 || quantity.value==0 || title.value==0)
    {
      alert("Enter all the values");
    } 
    else{
    let webTask =localStorage.getItem("localTask");
    if(webTask==null){
        taskObj=[];
        
     }
     else{
         taskObj=JSON.parse(webTask);
     }
     taskObj.push({
         title:title.value,
         price:price.value,
         quantity:quantity.value,
         amount:price.value*quantity.value
    }
         );
     localStorage.setItem("localTask",JSON.stringify(taskObj));
     title.value=" ";
     price.value=" ";
     quantity.value=" ";
    }}
    displayData();

})
 

function displayData(){
    let webTask =localStorage.getItem("localTask");
    if(webTask==null){
        taskObj=[];
    }
    else{
        taskObj=JSON.parse(webTask);
    }
    var html='';
var table=document.querySelector("tbody");

// sorting according to total amount
 taskObj.sort((a, b) => {
    if (a.amount > b.amount) {
        return 1;
    }
    else {
        return -1;
    }
})

localStorage.setItem("localTask",JSON.stringify(taskObj));

taskObj.forEach((item,index)=>{

html+=`
<tr class="table-succes">
  <td>${index+1}</td>
  <td>${item.title}</td>
  <td>&#8377;${item.price}</td>
  <td>${item.quantity}</td>
  <td>&#8377;${item.amount}</td>
  <td>
    <button class="btn btn-md btn-success complete-button" onclick="reduceAmt(${index})">pay</button>
    <button class="btn btn-md btn-danger remove-button" onclick="remove(${index})">Delete</button>
    <button class="btn btn-md btn-light " onclick="edit(${index})">Edit</button>
  </td> 
</tr>

`
})
table.innerHTML=html;
}





// edit button
function edit(index){
  let saveIndex=document.querySelector("#saveindex");
  let addTaskBtn=document.querySelector(".newEntry");
  let saveTaskBtn=document.querySelector("#savetaskbtn");
  saveIndex.value=index;
  let webTask =localStorage.getItem("localTask");
  let taskObj=JSON.parse(webTask);
  title.value=taskObj[index].title;
  price.value=taskObj[index].price;
  quantity.value=taskObj[index].quantity;
  addTaskBtn.style.display='none';
  saveTaskBtn.style.display='inline';

}
// to save the edited data

let saveTaskBtn=document.querySelector("#savetaskbtn");
saveTaskBtn.addEventListener("click",function(){
  let addTaskBtn=document.querySelector(".newEntry");
  let webTask =localStorage.getItem("localTask");
  let taskObj=JSON.parse(webTask);
  let saveIndex=document.querySelector("#saveindex").value;
  taskObj[saveIndex].title=title.value;
  taskObj[saveIndex].price=price.value;
  taskObj[saveIndex].quantity=quantity.value;
  taskObj[saveIndex].amount=price.value*quantity.value;
  saveTaskBtn.style.display='none';
  addTaskBtn.style.display='inline'; 
  localStorage.setItem("localTask",JSON.stringify(taskObj));
displayData();

pV=price.value;
qV=quantity.value;

title.value=" ";
price.value=" ";
quantity.value=" ";
})  


// pay button
function reduceAmt(index){
  var broke=0;
  var incoming=Number(incomeDisplay.innerHTML);
  var savings=Number(savingDisplay.innerHTML); 
var amt=Number(pV*qV);
  if(incoming>=0 && amt<=incoming){
  incomeDisplay.innerHTML=incoming-amt;
  balance.innerHTML-=amt;
  alert("Paid successfully");
}
  else if(Number(incoming+savings)>=amt)
{ 
  incomeDisplay.innerHTML=0;
  savingDisplay.innerHTML=savings+incoming-amt;
  balance.innerHTML-=amt;
  alert("Paid successfully");

}
  else if(savings>=0 && amt<=savings)
  {
savingDisplay.innerHTML=savings-amt;
balance.innerHTML-=amt;
alert("Paid successfully");

} 

    else {
alert("YOU ARE BROKE!");
broke++;
}
if(broke==0){
  let webTask =localStorage.getItem("localTask");
  let taskObj=JSON.parse(webTask);
  taskObj.splice(index,1);
  localStorage.setItem("localTask",JSON.stringify(taskObj));
  displayData();


}
} 

// delete button
function remove(index){
let webTask =localStorage.getItem("localTask");
let taskObj=JSON.parse(webTask);
// to delete a item using its index
taskObj.splice(index,1);
localStorage.setItem("localTask",JSON.stringify(taskObj));
displayData();


}




   // local storage is cleared when refreshed
window.onbeforeunload = function (e) {
    localStorage.clear();
};
