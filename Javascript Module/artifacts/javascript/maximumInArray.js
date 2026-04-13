let arr=[10,5,15,78,32,11];
let max=-1;
let ans=arr.reduce(function(max,el){

        if(el>max)
            {
                return el;

            }
    else{
        return max;
    }
});
console.log(ans);