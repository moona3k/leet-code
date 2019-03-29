// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum possible for ‘k’ consecutive elements in the array.

// Nested Loop
const maxSum = (arr, k) => {

    let max = 0;
    for (let i = 0; i < arr.length - 1; i++){
        let sum = arr[i];
        for (let j = i + 1; j < i + k; j++){
            sum += arr[j];
        }
        if (sum > max){
            max = sum;
        }
    } 
    return max;
}

let a = [100, 200, 300, 400];
let b = 2
maxSum(a, b) // 700

let c = [1, 9, 5, 4, 2, 10, 23, 3, 1, 0, 20];
let d = 4
maxSum(c, d); // 39

// Nested for loop; time complexity sucks; let's now try Sliding Window technique

// Sliding Window (fail...)
const maxSum = (arr, k) => {

    let max = 0;
    let windowSum = 0;

    for (let i = 0; i < k; i++){
        windowSum += arr[i];
    }

    for (let i = k; i < arr.length - 1; i++){
        windowSum = windowSum - arr[i - 1] + arr[i + k]; // re-visit this
    }
}