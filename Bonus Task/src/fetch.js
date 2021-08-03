import ReactDOM from 'react-dom';
import React from 'react';
var fetchedData;

// fetching the API

componentDidMount();{
const url="https://gist.githubusercontent.com/YatharthVyas/93b13e4fd8687ecb6d692fedf852299a/raw/e9515185ca107d05dad1032c60917e2f511a805c/contact.json";

console.log(url);  

fetch(url)
.then(function(response){
    if(response.status!==200){
        alert("looks like some error.Status Code: " + response.status)
        
        return;
    }
    
    response.json().then(
        function(data) {
        dis(data);
      
    })
    // )
    .catch(function(err){
        console.log("oops");
    })})
}
    function dis(data){
        console.log(data);
        return data;
    }
    
    export default dis;