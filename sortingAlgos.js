
// Slowest Sorting Algo O(n^2) time complexity
function Bubble(ar ) {
    let len = ar.length;
    
   while (true) {
       len--;
       let swapped = false;
    for ( let i = 0; i < len; i++) {
        let a = ar[i]
        let b = ar[i+1]
        if ( a > b) {
            ar[i] = b
            ar[ i + 1] = a
            swapped = true;
          }
       }
      if ( !swapped) break;
    }
    return ar
}
console.log(Bubble([2,50,4,1,0]))

// nested for loop used
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
