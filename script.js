let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")
let box7 = document.querySelector(".box7")
let box8 = document.querySelector(".box8")
let box9 = document.querySelector(".box9")

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
   //  let val4 = Math.random()*1;
    return `rgb(${val1}, ${val2}, ${val3})`
   }
function randomsix(){
   return Math.floor(Math.random()*1000)+1+"px";
}
function rax(){
   return Math.floor(Math.random()*50)+1+"px";
}
setInterval(() => {
box3.style.backgroundColor=getRandomColor()
box3.style.border= getRandomColor()
box3.style.height=randomsix() 
box3.style.width=randomsix() 
box3.style.bottom=randomsix() 
box3.style.left=randomsix() 
},500);
setInterval(() => {
box2.style.backgroundColor=getRandomColor()
box2.style.border= getRandomColor()
box2.style.height=randomsix() 
box2.style.width=randomsix() 
box2.style.bottom=randomsix() 
box2.style.left=randomsix() 
}, 500);
setInterval(() => {
box1.style.backgroundColor=getRandomColor()
box1.style.border= getRandomColor()
box1.style.height=randomsix() 
box1.style.width=randomsix() 
box1.style.bottom=randomsix() 
box1.style.left=randomsix() 
// box1.style.borderRadius=rax() 


}, 500);