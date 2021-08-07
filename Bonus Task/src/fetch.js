import React, { useEffect, useState } from  "react";
import "./index.css";
import { FaRegStar } from "react-icons/fa";
const UseEffectAPI = ()=>{

    const [users,setUsers] = useState([]);
const getUsers = async () =>{


const url="https://gist.githubusercontent.com/YatharthVyas/93b13e4fd8687ecb6d692fedf852299a/raw/e9515185ca107d05dad1032c60917e2f511a805c/contact.json";
const response=await fetch(url)
var data=await response.json();





data.sort((a, b) => {
    let fa = a.first_name,
        fb = b.first_name;

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
});

setUsers(data);
}

    useEffect(() =>{
  getUsers()},
//   to stop going to infinite loop
[] )




   return(
  <div className="mainContact">
{users.map((curElem)=>
{
    return <div key={curElem.id} className="contact">
    <button>
    <FaRegStar/>
    </button>
        
    <img src={curElem.avatar} alt="imgs"></img>
    <h2>Name: {curElem.first_name +" "+ curElem.last_name}</h2>
    <p>Phone: {curElem.phone_number}</p>
<p>Email: {curElem.email}</p>
   <p>

   </p>     
</div>
}

)}
</div>


)
}


export default UseEffectAPI