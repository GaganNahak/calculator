
// *****************************NUMBERS**********************************

let n1=document.getElementById("n1");
let n2=document.getElementById("n2");

let n3=document.getElementById("n3");
let n4=document.getElementById("n4");

let n5=document.getElementById("n5");
let n6=document.getElementById("n6");

let n7=document.getElementById("n7");
let n8=document.getElementById("n8");

let n9=document.getElementById("n9");
let n0=document.getElementById("n0");

// *********************************************symbols*********************************
let mis=document.getElementById("mis");
let phe=document.getElementById("phe");

let gun=document.getElementById("gun");
let h=document.getElementById("h");

let cut=document.getElementById("cut");
 
 let equal=document.getElementById("eq");
 let input=document.getElementById("input");
 let ans=document.getElementById("ans");
 let del=document.getElementById("del") ;
 let br1=document.getElementById("br1");
 let br2=document.getElementById("br2");
 
//  *****************************************NUMBERS***************************************
 n1.addEventListener("click",()=>{
    ans.innerHTML+=1
 })
 n2.addEventListener("click",()=>{
    ans.innerHTML+=2
 })



 n3.addEventListener("click",()=>{
    ans.innerHTML+=3
 })
 n4.addEventListener("click",()=>{
    ans.innerHTML+=4
 })


 
 n5.addEventListener("click",()=>{
    ans.innerHTML+=5
 })
 n6.addEventListener("click",()=>{
    ans.innerHTML+=6
 })



 n7.addEventListener("click",()=>{
    ans.innerHTML+=7
 })
 n8.addEventListener("click",()=>{
    ans.innerHTML+=8
 })



 n9.addEventListener("click",()=>{
    ans.innerHTML+=9
 })
 n0.addEventListener("click",()=>{
   ans.innerHTML+=0
 })



 
// ****************************************************************symbols*******************************



mis.addEventListener("click",()=>{
    ans.innerHTML+=`+`;
    ()=>{
      
    }
})
phe.addEventListener("click",()=>{
    ans.innerHTML+=`-`
}) 

gun.addEventListener("click",()=>{
    ans.innerHTML+=`*`
})
h.addEventListener("click",()=>{
    ans.innerHTML+=`/`
})
 
equal.addEventListener("click",( )=>{
   let exp= ans.innerHTML;
  let res=eval(exp);   
//   res=parseFloat(res.toFixed(5));
  ans.innerHTML=res;
  
  
})
cut.addEventListener("click",()=>{
    ans.innerHTML="  "
     
})
del.addEventListener("click",()=>{
   let alltext=ans.innerHTML;
   ans.innerHTML=alltext.slice(0,-1)
    
})
br1.addEventListener("click",()=>{
   ans.innerHTML+="("
}) 
br2.addEventListener("click",()=>{
   ans.innerHTML+=")"
}) 