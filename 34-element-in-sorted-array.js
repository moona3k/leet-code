// Find First and Last Position of Element in Sorted Array

// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
// Your algorithm's runtime complexity must be in the order of O(log n).
// If the target is not found in the array, return [-1, -1].

const searchRange = (num, target) => {
    // finding start element is easy. iterate until you hit target, then record the index
    // finding the end element is harder.
    // find all element matching target. record their index. return arr[0] and arr[-1]

    

    let arr = [];
    for (let i=0; i < num.length; i++){
        if (num[i] === target){
            arr.push(i)
        }
    }

    if (arr.length === 0){
        return [-1, -1]
    }

    let result = [];
    
    result.push(arr[0]);
    result.push(arr.slice(-1)[0]);
    return result;
};

let a = [5, 7, 7, 8, 8, 10];
let b = 8

searchRange(a, b);

