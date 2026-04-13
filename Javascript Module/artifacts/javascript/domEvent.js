let btns=document.querySelectorAll("button");
for(btn of btns)
    {
        btn.addEventListener("click",sayhello);
    }
function sayhello()
{
    console.log("pressed");
}    

let dv=document.createElement("div");
let body=document.querySelector("body");
body.append(dv);
dv.classList.add("bg");
