let max=parseInt(prompt("ENter a maximum no"));
let no=Math.floor(Math.random()*max)+1;
let gs=parseInt(prompt("Guess the random no"));
while(true)
    {
        
        if(gs==no)
            {
                console.log("you had guess right number");
                break;
            }
        else if(gs!=no)
            {
                console.log("wrong guess");
            }    

        if(gs==0)
            {
                console.log("Thanks for playing");
                break;
            }

            //hint 
            if(gs<no)
                {
                    console.log("you have entered small number");
                }    
            else{
                console.log("you have enter greater number");
            }    
            gs=parseInt(prompt("Guess the random no"));
    }