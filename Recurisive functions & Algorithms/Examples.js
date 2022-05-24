
// function capitalizeWords (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;
   
//   }
  
// console.log(capitalizeWords(["car","taco","banana"]));















// function flatten(oldArr){
//     let newArr=[];

//     for (let i = 0; i < oldArr.length; i++) {
//         if(Array.isArray(oldArr[i])){
//             newArr = newArr.concat(flatten(oldArr[i]))
//       } else {
//             newArr.push(oldArr[i])
//       }

// return newArr;
        
//     }
// }


// console.log(flatten([1],[2],[3]));












// function someRecursive(array, callback) {
//     if (array.length === 0) return false;
//     if (callback(array[0])) return true;
//     return someRecursive(array.slice(1),callback);
// }


// const isOdd = val => val % 2 !== 0;





// console.log(someRecursive([0,1,2,3,4,5],isOdd));














// function palindrome(str){
//     if(str.length === 1) return true;
//     if(str.length === 2) return str[0] === str[1];
//     if(str[0] === str.slice(-1)) return palindrome(str.slice(1,-1))
//     return false;


// }




// console.log(palindrome("car"));










// function reverse(str){
//     if (str.length<=1) {
//         return str;
//     }
//     console.log((str.slice(1))+str[0]);
//     return reverse(str.slice(1))+str[0];


// }



// console.log(reverse("hello"));


















// function fib(num){
//     if (num<=2) {
//         return 1;
//     }
//    return fib(num-1)+fib(num-2);
               
                

// }


// console.log(fib(4));



















// function recursiveRange(num){
// if (num===0) {
//     return 0;
// }
// return num+recursiveRange(num-1)

// }

// console.log(recursiveRange(1));

















// function productOfArray(arr){
//     if (arr.length===0) {
//         return 1;
//     }
//     return arr[0]*productOfArray(arr.slice(1));


// }




// console.log(productOfArray([1,2,3,10]));












// function faktorial(num){

//     if (num===0) {
//         return 1;
//     }


//   return num* faktorial(num-1)
    


// }


// console.log(faktorial(5));











// function power(base,exponent){
//     if(exponent===0) {
//         return 1;
//     }
//     return base * power(base,exponent-1);
// }


// console.log(power(2,3));









// function collectodds(nums){
//     let result=[];

//     function helper(helperinput){
//         if (helperinput.length===0) {
//             return
//         }

//         if (helperinput[0]%2!==0) {
//             result.push(helperinput[0]);
//         }
//         console.log(helperinput);
//         //önemli
//         helper(helperinput.slice(1));
//     }

//     helper(nums);
//     return result;

// }


// console.log(collectodds([1,2,3,4,5,6,7]));








// function recurisivefoctorial(num){
//     if (num===1) {
//         return 1;
//     }
//     return num*recurisivefoctorial(num-1);

// }


// console.log(recurisivefoctorial(1)); 






// function fuctorial(num){
//     let total=1;

//     for(let i = num; i > 0; i--) {
//         total*=i
      
//     }
//     console.log(total);
// }


// console.log(fuctorial(5));









// function countdown(num){
//     if (num<=0) {
//         console.log("all done");
//         return
//     }
//     console.log(num);
//     num--;
//     countdown(num)
// }

// countdown(5)














// function averagePair(arr,avg){
//     //check if array is empty
//      if(arr.length === 0 ) return false;
//     //create 2 ppointers
//     let left = 0;
//     let right = arr.length-1;
//     //loop through the array
//     while(left<right){
//         //write condition to check avg
//        let math = (arr[left]+arr[right])/2;
//        console.log(math);
//         if( math === avg)
//             return true;
//         else if(math > avg){
//             right--;
//         }
//         else
//          left++;
//     }
//     return false;
//     }
//     console.log(averagePair([0,1,2,3,4,8],2,5));







// function sameFrequency(num1, num2){
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if(strNum1.length !== strNum2.length) return false;
    
//     let countNum1 = {};
//     let countNum2 = {};
    
//     for(let i = 0; i < strNum1.length; i++){
//       countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
     
//     }
//      console.log(countNum1);
//     for(let j = 0; j < strNum1.length; j++){
//       countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//     }
//     console.log(countNum2);
//     for(let key in countNum1){
//         console.log(countNum1[key]);
//       if(countNum1[key] !== countNum2[key]) return false;
//     }
   
//     return true;
//   }





//   console.log(sameFrequency(3125577,1325577));








// function maxSubarraySum(arr,num){
    
    
//     if (num>arr.length) {
//         return null;
//     }

//     let max=0;
    
//     for (let i = 0; i < arr.length-num+1; i++ ) {
//        let temp=0;
//        for (let j = 0; j < num; j++) {
        
//          temp+=arr[i+j];

//        }
//         if (temp>max) {
//             max=temp;
//         }         
       
        
//     }
    
//     console.log(max);

    
    

// }

// let array=[1,2,5,2,8,1,5];

// maxSubarraySum(array,2);//10







// function countUniqeValues(arr){
//     if (arr.length===0) {
//         return 0;
//     }
//     let i=0;
//     for(let j= 1; j< arr.length; j++) {
        
//             if (arr[i]!==arr[j]) {
//                 i++;
//                 arr[i]=arr[j];
//             }
//             console.log(i,j);
           
        
//     }
//     return i+1;
    

// }

// console.log(countUniqeValues([1,2,3,4,4,5,5]));









// function sumzero(arr){

//     let left=0;
//     let right=arr.length-1;
    
//     while(left<right){
//         let sum =arr[left]+arr[right];
//         if (sum===0) {
//             return [arr[left],arr[right]];

//         }
//         else if(sum>0){
//             right--
//         }
//         else{
//             left++
//         }
//     }


// }

// console.log(sumzero([-3,-2,-1,0,1,2,3,4,5]));













// function comparebylen(str1,str2){
//     return str1.length - str2.length;
// }



// console.log(["steele","colt","data structers","algoritma"].sort(comparebylen));












// function numbercompare(num1,num2){
//     return num1-num2;
//  }

//  console.log([6,4,15,10].sort(numbercompare));




