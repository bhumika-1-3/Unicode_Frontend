// inputs
var paid=0;
var free=0;
var limit=0;
var noSlots=0;
var forAll=0;
var pincode=document.querySelector(".pincode");
var dateInput=document.querySelector(".date");
var submit=document.querySelector(".submit");
var monthInput=document.querySelector(".month");
var yearInput=document.querySelector(".year");
var paymentPaid=document.querySelector(".paymentPaid");
var paymentFree=document.querySelector(".paymentFree");
var vaccine=document.querySelector(".vaccine");
var mode=document.querySelector(".light");
var age18=document.querySelector(".age18");
var age45=document.querySelector(".age45");

          //  Dark mode
mode.addEventListener("change",function(){
  var switchData=document.querySelector(".dark");
  var element = document.body;
  var mainTable=document.querySelector("thead");
  if(this.checked==true){
  element.classList.add("dark-mode");
  vaccine.classList.add("imgDark");
  mainTable.classList.add("table-light") ;
  }
  else{
    element.classList.remove("dark-mode");
    vaccine.classList.remove("imgDark");
    mainTable.classList.remove("table-light") ;
  
  }
})


                    // Free and paid button
paymentFree.addEventListener("change",function(){
  if(this.checked===true)
   free++;
   else{
     free--;
       }

})

paymentPaid.addEventListener("change",function(){
  if(this.checked===true)
   paid++;
   else{
     paid--;
    }
    
  })
  
  // 18+ and 45+
  age18.addEventListener("change",function(){
    if(this.checked===true)
     limit++;
     else{
       limit--;
         }
  
  })

 age45.addEventListener("change",function(){
    if(this.checked===true)
     forAll++;
     else{
       forAll--;
         }
  
  })




  // change the date format
  function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0].substring(2), // get only two digits
    month = datePart[1], day = datePart[2];
    DATE=day+'/'+month+'/'+year;
    console.log(day+'/'+month+'/'+year);
  }
  
//  main display for the data

submit.addEventListener("click",function(){
  
  
  if(Number(dateInput.value)==0 || pincode.value==0){
    alert("Insufficient Data!")
  }
  else{

var mainTable=document.querySelector("table")  
var table=document.querySelector(".tableBody")
formatDate (dateInput.value);
vaccine.classList.add("remove");
mainTable.classList.add("shifting")

// fetching the API
const url="https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +pincode.value+ "&date=" +DATE;
console.log(url);  
fetch(url)
    .then(function(response){
         if(response.status!=200){
            alert("looks like some error.Status Code: " + response.status)
            
             return;
         }
   
    response.json().then(function(data) {


if((free!=0 && paid!=0) || (free==0 && paid==0)){
    if(data.sessions.length==0)
  {
    alert("No slots available");
  }

  else{
  for(var i=0;i<data.sessions.length;i++){
    sort(data,i); 
  }
 }       
}

// paid slots
else if(paid!=0){
   for(var i=0;i<data.sessions.length;i++){
            if(data.sessions[i].fee!=="0"){  
           sort(data,i);
       }}}

  //free slots  
else if(free!=0){
  for(var i=0;i<data.sessions.length;i++){
    if(data.sessions[i].fee=="0"){  
      
      sort(data,i);
      }}}
   
else{
  alert("error");
}
     })
     })
    .catch(function(err){
        console.log("oops");
    })} });





function sort(data,i){
  // +18 vaccine
if(limit!=0){
  if(data.sessions[i].min_age_limit=="18"){
  displaying(data,i);
  
}}

// +45 vaccine
else if(forAll!=0){
  if(data.sessions[i].min_age_limit=="45"){
displaying(data,i);
console.log(noSlots);
 

}} 
else{
  displaying(data,i);
}
}


// CREATING THE DATA  
function displaying(data,i){
var table=document.querySelector(".tableBody")

  var row=document.createElement("tr")
  row.classList.add("bg-info")
  table.appendChild(row)

  var t1=document.createElement("td")
  t1.innerText=data.sessions[i].name;
  row.appendChild(t1);
  var t2=document.createElement("td")
  t2.innerText=data.sessions[i].fee;
  row.appendChild(t2);
  var t3=document.createElement("td")
  t3.innerText=data.sessions[i].vaccine;
  row.appendChild(t3);
  var t4=document.createElement("td")
  t4.innerText=data.sessions[i].date;
  row.appendChild(t4);
  var t5=document.createElement("td")
  t5.innerText=data.sessions[i].min_age_limit+"+";
  row.appendChild(t5);
}