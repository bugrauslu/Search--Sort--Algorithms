
function bubblesort(arr){
    let noswap;
    for (let i = arr.length; i > 0; i--) {
        noswap=true;
        for (let j = 0; j < i-1; j++) {
            console.log(arr);
          if(arr[j]>arr[j+1]){
            var temp=arr[j];
            arr[j]=arr[j+1];     
            arr[j+1]=temp;    
            noswap=false;
        }
            
        }
        if (noswap) {
            break;
        }
    }
    return arr;
}



console.log(bubblesort([8,1,2,3,4,5,6,7]));