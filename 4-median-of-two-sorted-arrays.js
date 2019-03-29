// There are two sorted arrays nums1 and nums2 of size m and n respectively.
// Find the median of the two sorted arrays.The overall run time complexity should be O(log(m + n)).
// You may assume nums1 and nums2 cannot be both empty.

const findMedian = (num1, num2) => {
    let totalLength = num1.length + num2.length;
    let medianIndex = Math.floor(totalLength / 2);
    
    let median;
    let oneIndex = 0;
    let twoIndex = 0;
    for (let i=0; i <= medianIndex; i++){
        console.log('median ', median);
        console.log('oneIndex ', oneIndex);
        console.log('twoIndex ', twoIndex);
        if (num1[oneIndex] > num2[twoIndex]){
            median = num2[twoIndex];
            twoIndex++;
        } else {
            median = num1[oneIndex];
            oneIndex++;
        }
    }

    return median;
}


let num1 = [1, 2, 5]
let num2 = [3, 4]

findMedian(num1, num2)