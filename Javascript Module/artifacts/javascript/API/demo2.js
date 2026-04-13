let url="https://catfact.ninja/fact";
async function getFacts()
{
    try{                                    //try catch are use to overcome the error bcz if errror gets then program execution is stopped so to contiune the further program try catch are use 
        let res = await fetch(url);
    console.log(res);
    let data=await res.json()
    console.log(data);
    console.log(data.fact);
    }
    catch(e)
    {
        console.log(e);
    }
    
}