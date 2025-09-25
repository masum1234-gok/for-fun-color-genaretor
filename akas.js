let box0 = document.querySelector(".box0")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")
let box7 = document.querySelector(".box7")
let box8 = document.querySelector(".box8")
let box9 = document.querySelector(".box9")


function KeyboardEvent(element){
    function getRandomColor(){
        let val1 = Math.ceil(0 + Math.random()* 255);
        let val2 = Math.ceil(0 + Math.random()* 255);
        let val3 = Math.ceil(0 + Math.random()* 255);
        //  let val4 = Math.random()*1;
        return `rgb(${val1}, ${val2}, ${val3})`
    }
    function randomsix(){
        return Math.floor(Math.random()*700)+1+"px";
    }
    function rax(){
        return Math.floor(Math.random()*50)+1+"px";
    }
    function raxi(){
        return Math.random();
    }
    
    setInterval(() => {
        element.style.backgroundColor = getRandomColor();
        element.style.border = `${rax()} solid ${getRandomColor()}`;
        element.style.height = randomsix();
        element.style.width = randomsix();
        element.style.bottom = randomsix();
        element.style.left = randomsix();
        element.style.opacity = raxi();
    }, 500);
}
function KeyboardEvent2(element){
    function getRandomColor(){
        let val1 = Math.ceil(0 + Math.random()* 255);
        let val2 = Math.ceil(0 + Math.random()* 255);
        let val3 = Math.ceil(0 + Math.random()* 255);
        return `rgb(${val1}, ${val2}, ${val3})`
    }
    function randomsix(){
        return Math.floor(Math.random()*700)+1+"px";
    }
    function rax(){
        return Math.floor(Math.random()*50)+1+"px";
    }
    
    function raxi(){
        return Math.random();
    }
    setInterval(() => {
        element.style.backgroundColor = getRandomColor();
        element.style.border = `${rax()} solid ${getRandomColor()}`;
        element.style.height = randomsix();
        element.style.width = randomsix();
        element.style.top = randomsix();
        element.style.right = randomsix();
        element.style.opacity = raxi();
    }, 1000);
}

KeyboardEvent(box0)
KeyboardEvent(box1)
KeyboardEvent(box2)
KeyboardEvent(box3)
KeyboardEvent(box4)
KeyboardEvent2(box5)
KeyboardEvent2(box6)
KeyboardEvent2(box7)
KeyboardEvent2(box8)
KeyboardEvent2(box9)
// KeyboardEvent(box10)
// KeyboardEvent(box)