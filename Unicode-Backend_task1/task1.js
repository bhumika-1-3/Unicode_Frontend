 var num = prompt("Enter the number of words:");


 var i,j;
var store=[100];
var occurence=[];
 for(let i=0;i<=num-1;i++){
store[i]=prompt("Enter the word:");
 }
 console.log(store);
 document.write("<h2>Input:</h2>"+store);
var count=0
console.log("The distinct words are:");
document.write("<h2>The distinct words are:</h2>");
 for(i=0;i<=num-1;i++){

// to check if word is repeated 
for(j=0;j<=i;j++)
{
    if(store[i]==store[j])
    break;
}
if(i==j){
 count++;   
console.log(store[i]);
document.write(store[i]+"<br>");
 }}

 console.log(" ");


console.log("Occurence:");
document.write("<h2>Occurence:</h2>");
for(i=0;i<store.length;i++){
var x=0;
var occur=1;
    for(j=0;j<store.length;j++)
    
    {
        // to check the occurence of a word
        if(j>=i){
                if(store[i]==store[j]){
                    if(j!=i)
                    occur++;
                    
                }
            }

        else if(store[i] == store[j])
        x=1;
        
    }
if(x!=1){
occurence.push(
    {word:store[i],
   occur:occur});

}
}

// occurence
var dis='';
for(i=0;i<occurence.length;i++){
  dis+=occurence[i].occur.toString()+" ";
}
console.log(dis);
document.write(dis+"<br>");
console.log(" ");

//  number of distinct
console.log("Number of distinct words:"+ count);
document.write("<h2>Number of distinct words:</h2>"+ count);


// bonus
let sorted=occurence.sort((a, b) => {
    if (a.occur < b.occur) {
        return 1;
    }
    else {
        return -1;
    }
})

console.log(" ");
console.log("Sorted:");
document.write("<h2>Sorted:</h2>");
// sorted:
for(i=0;i<occurence.length;i++){
    console.log(sorted[i].word);
    document.write(sorted[i].word+"<br>");

}
console.log(" ");

// Least repeated word
console.log("Least repeated:");
document.write("<h2>Least repeated:</h2>");
for(i=0;i<occurence.length;i++){
var min=Math.min(occurence[i].occur);
  if(Math.min(occurence[i].occur)==1)
   {console.log(occurence[i].word);
    document.write(occurence[i].word+"<br>");

   }
}
    
console.log(" ");

// // Most repeated word
console.log("Most repeated:");
document.write("<h2>Most repeated:</h2>");
for(i=0;i<occurence.length;i++){
var max=Math.max(occurence[i].occur);

for(i=0;i<occurence.length;i++){
if(occurence[i].occur==max)
    {
        console.log(occurence[i].word);
        document.write(occurence[i].word+"<br>");
    }
}}











