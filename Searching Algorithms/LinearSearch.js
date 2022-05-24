function linearSearch(arr,val){


    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===val) {
            return i;
        }
        

    }
}

console.log(linearSearch([35,42,12,45,1,2,3],3));


