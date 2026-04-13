let url="https://catfact.ninja/fact";
async function getFacts()
{
    try{                                    //try catch are use to overcome the error bcz if errror gets then program execution is stopped so to contiune the further program try catch are use 
        let res = await axios.get(url);
        console.log(res);
        // let data=await res.json()
        // console.log(data);
        console.log(res.data.fact);
    //     let ans=res.data.fact;
    //     let btn=document.querySelector("button");
    //     btn.addEventListener("click",function()
    // {
    //     let p =document.querySelector("p");
    //     p.innerText=ans;
    // })
    }
    catch(e)
    {
        console.log(e);
    }
    
}

getFacts();