let gameSeq=[];
let userSeq=[];

let color=["red","blue","green","brown"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
     {   
      started=true;  
      levelUp();
    }
})

function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
    {
        btn.classList.remove("flash");
    },250);
}

function levelUp()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let num=Math.floor(Math.random()*4);
    let randomColor=color[num];
    gameSeq.push(randomColor);
    let randclr=document.querySelector(`.${randomColor}`);
    btnFlash(randclr);
}

function checkAns(idx)
{
    let idx=level-1;
    if(userSeq[idx]==gameSeq[idx])
        {
            if(userSeq.length==gameSeq.length)
                {
                    setTimeout(levelUp,1000);
                }
        }
    else{
        document.querySelector("body").style.backgroundColor="red";
        h2.innerText="game Over press any key to start";
        setTimeout(function()
        {
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }    
}

function btnpress()
{
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
    {
        btn.addEventListener("click",btnpress);
    }

function reset()
{
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}    