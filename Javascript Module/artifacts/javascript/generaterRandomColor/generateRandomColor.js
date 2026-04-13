let body=document.querySelector("body");
let div=document.querySelector("div");
let h3=document.querySelector("h3");

let btn=document.querySelector("button");

function color()
{
let red=Math.floor(Math.random()*255);
let green=Math.floor(Math.random()*255);
let blue=Math.floor(Math.random()*255);
return `rgb(${red},${green},${blue})`
}

function colorchange()
{
    
    let colorch=color();
    h3.innerText=colorch;
    div.style.backgroundColor=colorch
}

btn.addEventListener("click",colorchange);