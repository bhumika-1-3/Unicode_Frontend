
var listInput=document.querySelector(".listInput")
var listInputButton=document.querySelector(".listInputButton");
var theList=document.querySelector(".theList")
var timeDisplay=0;
var timeRecord=document.querySelector(".timeRecord"); 
// theList.addEventListener("click",check);
theList.addEventListener("click",Delete);


function Delete(e){
    const item=e.target;
// working of remove button
  if(item.classList[0]==='remove-button')
  {
  const removing=item.parentElement;
  removing.classList.add("fall");
  removing.addEventListener('transitionend',function(){
    removing.remove();
  });
  } 
// working of completed button

if(item.classList[0]==='add-button')
  {
      const adding=item.parentElement;
      adding.classList.add("completed");
adding.addEventListener('transitionend',function(){
  adding.remove();

});
var t=0;
inputTime=Number(prompt("time required in mins:"));
timeDisplay+=inputTime;
var final=t+timeDisplay;
var dis=$(".timeRecord").text(final)
// input the time consume
// var t=$(".timeRecord").text();
// 
// if(time==true){
//  inputTime=Number(prompt("time required in mins:"));
// timeDisplay+=inputTime;
// var final=t+timeDisplay;
}
 


console.log(final);


// var t=$(".timeRecord").text();
// var t=0;
// var dis=$(".timeRecord").text(t+timeDisplay)
// console.log(t+timeDisplay);

}
// timeRecord.innerText="Time require:- "+timeDisplay + "mins";
// var timeAdd=0;

  // counter--;
  
//   function check(e){
//     const item=e.target;
//   if(item.classList[0]==='add-button')
//   {
//       const adding=item.parentElement;
//   $(adding).toggleClass("completed");
// var time=$(adding).hasClass("completed");
// if(time==true){

// timeDisplay+=Number(prompt("time required in mins:"));
// }
// }
// var t=$(".timeRecord").text();
// var t=0;
// var dis=$(".timeRecord").text(t+timeDisplay)
// console.log(t+timeDisplay);
// // timeRecord.innerText="Time require:- "+timeDisplay + "mins";
// // var timeAdd=0;
// }



listInputButton.addEventListener("click",adding)
// var counter=0;
function adding(event){
// counter++
// console.log(counter);
// if(counter>6){
    // listInputButton.disabled=true;
    // }
   
// else{
  
  //   checkbox.addEventListener( 'change', function() {
  //     if(this.checked) {
  //     addLi.classList.add("compulsory");          
  //     } 
  // });

  // to prevent from auto refresh
event.preventDefault();
var taskTime=document.querySelector(".taskTime").value;
var taskDate=document.querySelector(".taskDate").value;
   
    console.log(taskTime);
 if (listInput.value==0 || taskTime==0 || taskDate==0 )
{
    alert("Enter the values!!")
}

else{
  // create div
   var toDoList=document.createElement("div");
   toDoList.classList.add("todo");
   theList.appendChild(toDoList);
  
  // create div
    var addLi=document.createElement("div");
    // addLi.innerHTML=listInput.value;
    addLi.classList.add("mainList")   
    toDoList.appendChild(addLi);
    
    
    //create List 
    var listItem=document.createElement("li");
    listItem.innerHTML=listInput.value;
    listItem.classList.add("listing")   
    addLi.appendChild(listItem);
    
    // add date and time
    var dateTime=document.createElement("h6");
    dateTime.innerHTML="<br> DATE: "+taskDate+"<br><br> TIME: "+taskTime + "<br>";
    dateTime.classList.add("listing");
    dateTime.classList.add("timingDate");
    addLi.appendChild(dateTime);
    
    //buttons 
    var addButton=document.createElement("button");
    addButton.innerHTML='<i class="fas fa-check btn btn-lg"></i>';
    addButton.classList.add("add-button");
    toDoList.appendChild(addButton);
 
    var removeButton=document.createElement("button");
    removeButton.innerHTML='<i class="fas fa-trash-alt btn btn-info btn-lg"></i>';
    removeButton.classList.add("remove-button");
    toDoList.appendChild(removeButton);

    var editButton=document.createElement("button");
    editButton.innerHTML='<i class="fas fa-user-edit btn btn-lg"></i>';
    editButton.classList.add("edit-button")
    toDoList.appendChild(editButton);
    editButton.onclick= function(){
      editing(listItem);
    }
  
   var toogleSwitch=document.createElement("label");
   toogleSwitch.classList.add("switch");
   toDoList.appendChild(toogleSwitch);
  
    
   var toogleInput=document.createElement("input");
   toogleInput.setAttribute('type','checkbox');
   toogleSwitch.appendChild(toogleInput);

   var toogle=document.createElement("p");
   toogle.innerHTML="NOT COMPULSORY";
   toogle.classList.add("toogleText")
  toDoList.appendChild(toogle);

  toogleInput.addEventListener('change',function(){
    if(this.checked==true){
      toDoList.classList.add("compulsory");
      toogle.classList.add("afterToogle");
      listItem.classList.add("afterToogleList");
      toogle.innerHTML="compulsory" ;  
      removeButton.disabled=true;
      removeButton.classList.add("opacity");
    }
    else{
      toDoList.classList.remove("compulsory")
      toogle.classList.remove("afterToogle");
      listItem.classList.remove("afterToogleList")
      toogle.innerHTML="Not compulsory" ;  
      removeButton.disabled=false;
      removeButton.classList.remove("opacity");

     
    }
  })

   var toogleSpan=document.createElement("span");
   toogleSpan.classList.add("slider");
   toogleSpan.classList.add("round");
   toogleSwitch.appendChild(toogleSpan);



    listInput.value= " ";
    $('input[type=date]').val('');
    $('input[type=time]').val('');

    
  
}}

function editing(event){
  var edit=prompt("Edit the value:",event.firstChild.val);
  if(edit==0)
  {
    alert("Opps you forgot to input");
  }
  else{
  event=event.innerHTML=edit;}
}



// add time to indi
// priority
// edit button dropdown