 const log = console.log;
 // create an empty 2D-Array with given size
 log(Array(2).fill().map(() => Array(3).fill(1)));
 log([...Array(4)].map( a => Array(3).fill(0)));
 
 // A maximal contigious subarray of arr ;
 arr = [-1, 2, 3, -9, 11]
// O(n^2) time complexity
 function getMaxSubSum() {
    let maxSub = 0
    for ( let i = 0; i < arr.length; i++ ) {
        let sumSub = 0;
       for (let j = i; j < arr.length; j++ ) {
           //console.log(arr[i], arr[j])
            sumSub += arr[j]
            maxSub = Math.max(maxSub, sumSub);
        }
    }
   return maxSub 
}
log(getMaxSubSum());
// O(n ) time complexity
// Kadane's algo or greedy algo;
function subSumArr() {
    let subpart = 0;
    let maxSum = 0;
    for ( let item of arr) {
        subpart += item;
        maxSum = Math.max(maxSum, subpart);
        if( subpart < 0) subpart = 0
    }
    return maxSum;
}

 subSumArr();
 
 
 function zeros(arr) {
     let i = 0;
     let pivot = arr.length-1;
     for ( let j = 0; j < arr.length; j++) {
        if(arr[j] != 0) {
            [arr[j], arr[i]] = [ arr[i], arr[j]]
            i++;
         }
       // [arr[i], arr[arr.length-1]] = [arr[arr.length-1], arr[i]]
     } 
     return arr;
 }
 log(zeros([0,7,0,15,0]))
