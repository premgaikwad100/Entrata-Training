let todo=[];
let req=prompt("which task you want to perform?");
while(true)
    {
        
        if(req=="quit")
            {
                break;
            }
        switch(req)
        {
            case "list":for(i of todo)
                        {
                            console.log(i);
                        }
                        console.log("----------");
                        break;
                       
            case "add":let tsk=prompt("enter a task you want to add");
                        todo.push(tsk);
                        console.log("task added");
                        break;
            case "delete":let dlt=parseInt(prompt("enter a index of task which you want to delete"));
                            todo.splice(dlt,1);
                            break;                                         
        }
        req=prompt("which task you want to perform?");

    }
