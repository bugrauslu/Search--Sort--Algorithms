
function findbinarySearch(arr,num){
    let start=0;
    let end=arr.length-1;
    let middle=Math.floor((start+end)/2)

    while(arr[middle]!=num && start<=end){
        console.log(start,end,middle);
        if (num<arr[middle]) {
            end=middle-1;
         
        }
        else{
            start=middle+1;
           
        }
        middle=Math.floor(Math.floor((start+end)/2))
        
    }
    if (arr[middle]===num) {
        return middle;
    }
    else{
        return -1;
    }
   
}


console.log(findbinarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],50));

