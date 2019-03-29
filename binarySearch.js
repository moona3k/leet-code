const binarySearch = (arr, target) => {

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);
    // let i = 0

    while (start < end) {
        // i++;
        // console.log(i, ' iteration', ' this is mid: ', mid)
        if (arr[mid] === target) {
            break;
        } else if (target < arr[mid]) {
            end = mid - 1;
            mid = Math.floor((start + end) / 2);
        } else {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        }
    };

    return (arr[mid] === target) ? mid : false
};

binarySearch([1, 2, 3, 4, 5, 6], 5);