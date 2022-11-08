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

/// quickSort
// worse when arr already sorted: OT(n^2)
// average is O(logn)
//used extra space 
function quick( arr) {
     if(arr.length < 2) return arr
     let pivot = arr[arr.length-1]
     let left = []
     let right = []
     for (let i = 0; i < arr.length-1; i++ ) {
         if( arr[i] < pivot) left.push(arr[i])
         else right.push(arr[i])
     }
     return [...quick(left),pivot, ...quick(right)]
}

console.log(quick([2,1,5,3,1, 25, 12]));

// quick sort using aux functions
function quickSort(arr, start, end) {
      
      if( start >= end) return;
      
      let index = partition( arr, start, end)
      
      quickSort( arr, start, index-1)
      quickSort( arr, index + 1, end)
     
     return arr;
} 
function partition(arr, start, end) {
      let index = start;
      let pivot = arr[end];
      
      for ( let i = start; i < end; i++) {
          if( arr[i] < pivot) {
              swap( arr, i, index)
              index++
          }
      }
     swap(arr, index, end)
    return index;
}
function swap(arr, a, b) {
    let temp = arr[a]
         arr[a] = arr[b]
         arr[b] = temp
}
console.log(quickSort([7,4,3,2,5], 0, 4))
