var map=function(arr, fn){
    const result=[];
    for (let i=0; i<arr.length; i++){
        result[i]=fn(result[i],i);
    }
    return result;
};

console.log([1,2,3],fn());