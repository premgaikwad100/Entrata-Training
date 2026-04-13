let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
    let btn=document.createElement("button");
    btn.classList.add("delete");
    btn.innerText="delete";
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    item.appendChild(btn);
    inp.value="";
})
// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns)
//     {
//         delbtn.addEventListener("click",function()
//     {
//         let prn=this.parentElement;
//         prn.remove();
//     })
//     }

ul.addEventListener("click",function(event)
{
    if(event.target.nodeName=="BUTTON")
    {
        let listItem=event.target.parentElement;
        listItem.remove();
    }   
})