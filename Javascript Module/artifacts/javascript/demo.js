let h1=document.querySelector("h1");
function colorchange(color,delay,nextcolorchange){
    setTimeout(function()
    {
        h1.style.color=color;
        if(nextcolorchange)nextcolorchange();
    },delay);
    
}
colorchange("red",1000,()=>{
    colorchange("green",1000),()=>
        {
            colorchange("blue",1000);
        }
});

