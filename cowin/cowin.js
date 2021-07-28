var paid=0;
var free=0;
var pincode=document.querySelector(".pincode");
var dateInput=document.querySelector(".date");
var submit=document.querySelector(".submit");
var monthInput=document.querySelector(".month");
var yearInput=document.querySelector(".year");
var paymentPaid=document.querySelector(".paymentPaid");
var paymentFree=document.querySelector(".paymentFree");
var vaccine=document.querySelector(".vaccine");
var mode=document.querySelector(".light");

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
   fetch(url)
    .then(function(response){
         if(response.status!=200){
             console.log("looks like some error.Status Code: " + response.status)
             return;
         }
   
    response.json().then(function(data) {
    console.log(data);
    console.log(data.sessions.length);


if((free!=0 && paid!=0) || (free==0 && paid==0)){
  if(data.sessions.length==0)
  {
    alert("No slots available");
  }
  else{
  for(var i=0;i<data.sessions.length;i++){
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
 }       
}

else if(paid!=0){
          for(var i=0;i<data.sessions.length;i++){
            // if(paid==0) 
            if(data.sessions[i].fee_type=="Paid"){  
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
      }}
      // }


else if(free!=0){
  // if(data.sessions.length==0)
  // {
  //   alert("No slots available");
  // }
  // else{
  for(var i=0;i<data.sessions.length;i++){
    if(data.sessions[i].fee_type=="Free"){  
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
     
      }}}
    // }

else{
  alert("error");
}
     })
      })
    .catch(function(err){
        console.log("oops");
    })} });


