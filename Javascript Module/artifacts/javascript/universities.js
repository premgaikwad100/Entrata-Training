let url="http://universities.hipolabs.com/search?name=";
let country=document.querySelector("input");
let btn=document.querySelector("button");
btn.addEventListener("click",async function()
{
   let res= await getColleges();
   show(res);
});

async function show(res){
    
    let list=document.querySelector("#list");
    list.innerText="";
    for(r of res)
        {
            let li=document.CreateElement("li")
            li.innerText=r.name;
            list.appendChild(li);
         }
}
async function getColleges()
{
    try{
    let res= await axios.get(url+country.value);
    return res.data;
    }
    catch(e)
    {
        console.log(e);
    }
}