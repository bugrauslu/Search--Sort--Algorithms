
function getdigit(num,i){
    return Math.floor(Math.abs(num) / Math.pow(10,i) %10);
    
}


function digitcount(num) {
    if (num===0) {
        return 1;
    }
    else{
        return Math.floor(Math.log10(Math.abs(num)))+1;
    }
}



function mostdigits(nums){
    let maxdigits=0;

    for (let i = 0; i < nums.length; i++) {
        maxdigits=Math.max(maxdigits,digitcount(nums[i]));
    }
    return maxdigits;
}






function radixsort(nums){
    let maxdigitscount =mostdigits(nums)
    
    for (let k = 0; k < maxdigitscount; k++) {
       let digitBuckets=Array.from({length:10},()=>[])
       
       for (let i = 0; i < nums.length; i++) {
         let digit=getdigit(nums[i],k);  
        digitBuckets[digit].push(nums[i])
           
       }
       nums=[].concat(...digitBuckets);

    }
    return nums
}

console.log(radixsort([12,345,5467,12,2345,9852]));
