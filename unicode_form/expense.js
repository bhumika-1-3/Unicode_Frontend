// inputs
var table=document.querySelector(".table");
var title=document.querySelector(".title");
var price=document.querySelector(".price");
var quantity=document.querySelector(".quantity");
var amount=document.querySelector(".amount");
var tBody=document.querySelector("tbody");
var income=document.querySelector(".income");
var balance=document.querySelector(".balance");
var saving=document.querySelector(".saving");
var savingDisplay=document.querySelector(".savingDisplay");
var incomeDisplay=document.querySelector(".incomeDisplay");
var newEntryButton=document.querySelector(".newEntry");

// to add a new entry to the list
newEntryButton.addEventListener("click",function(){
var iV=income.value;
var sV=saving.value;
pV=price.value;
var tV=title.value;
qV=quantity.value;
  // to check if the user has completed input 
   if(incomeDisplay.innerHTML==0 && savingDisplay.innerHTML==0){
      alert("ENTER INCOME & SAVING AMOUNT")
      }
   else{
   if(price.value==0 || quantity.value==0 || title.value==0)
   {
     alert("Enter all the values");
   } 
   else{
    //  making a list
   var newRow=document.createElement("tr");
   newRow.classList.add("table-success");
   tBody.appendChild(newRow); 
     
  var newItem=document.createElement("td");
  newRow.appendChild(newItem); 

  var serialNo=document.createElement("li");
  serialNo.classList.add('serial');
  newItem.appendChild(serialNo);

  var newItem1=document.createElement("td");
  newItem1.innerHTML=tV;
  newRow.appendChild(newItem1); 

  var newItem2=document.createElement("td");
  newItem2.innerHTML="&#8377;"+pV;
  newRow.appendChild(newItem2); 

  var newItem3=document.createElement("td");
  newItem3.innerHTML=qV;
  newRow.appendChild(newItem3); 

  var newItem4=document.createElement("td");
  var amt=price.value*quantity.value;
  newItem4.innerHTML="&#8377;"+amt;
  newRow.appendChild(newItem4); 

  var newItem5=document.createElement("td");
  newRow.appendChild(newItem5); 
      
  var payButton=document.createElement("button");
  payButton.classList.add("complete-button")
  payButton.classList.add("btn");
  payButton.classList.add("btn-md");
  payButton.classList.add("btn-success");
  payButton.innerHTML="pay";
  newItem5.appendChild(payButton);
  payButton.addEventListener("click",reduceAmt);

  var deleteButton=document.createElement("button");
  deleteButton.classList.add("remove-button")
  deleteButton.classList.add("btn");
  deleteButton.classList.add("btn-md");
  deleteButton.classList.add("btn-danger");
  deleteButton.innerHTML="delete";
  newItem5.appendChild(deleteButton);
  deleteButton.addEventListener("click",remove);


  var editButton=document.createElement("button");
 editButton.classList.add("btn");
 editButton.classList.add("btn-md");
 editButton.classList.add("btn-light");
  editButton.innerHTML="Edit";
  newItem5.appendChild(editButton);
  editButton.onclick= function(){
    editing(newItem1);
  }
  }
 title.value=" ";
 price.value=" ";
 quantity.value=" ";
 }
});

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





function reduceAmt(e){
  var broke=0;
  var incoming=Number(incomeDisplay.innerHTML);
  var savings=Number(savingDisplay.innerHTML); 
var amt=Number(pV*qV);
  if(incoming>=0 && amt<=incoming){
  incomeDisplay.innerHTML=incoming-amt;
  // console.log(incoming-amt);
  balance.innerHTML-=amt;
}
  else if(Number(incoming+savings)>=amt)
{ 
  incomeDisplay.innerHTML=0;
  savingDisplay.innerHTML=savings+incoming-amt;
  balance.innerHTML-=amt;

}
  else if(savings>=0 && amt<=savings)
  {
savingDisplay.innerHTML=savings-amt;
balance.innerHTML-=amt;
  } 

    else {
alert("YOU ARE BROKE!");
broke++;
}
// pay button
if(broke==0){
  var item=e.target;
  if(item.classList[0]==='complete-button')
  { console.log(45);
      const adding=item.parentElement.parentElement;
      adding.classList.add("completed");
  adding.addEventListener('transitionend',function(){
adding.remove();
});
}
} 
}

// edit button
function editing(event){
  var edit=prompt("Edit the value:",event.firstChild.val);
  if(edit==0)
  {
    alert("Opps you forgot to input");
  }
  else{
  event=event.innerHTML=edit;}
}

  // working of remove button
function remove(event){
  console.log("hey");
  var item=event.target;
    if(item.classList[0]==='remove-button')
    {

    const removing=item.parentElement.parentElement;
    removing.classList.add("fall");
    removing.addEventListener('transitionend',function(){
      removing.remove();
    });
  }

}

