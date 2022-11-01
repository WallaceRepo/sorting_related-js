
// Slowest Sorting Algo O(n^2) time complexity

function bubbleSort(arr) {
    
    for ( let i = arr.length-1; i > 0; i-- ) {
        
       for ( let j = 0; j < i; j++ ) {
          if( arr[j] > arr[j+1]) {
           let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
          }
       }
    }
    return arr
}
log(bubbleSort([3,4,1,6]))
