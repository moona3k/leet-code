// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

function longestSubstring(str) {

    let arr = str.split("");

    let counter = 0;
    let longestSub = [];

    for (let i=0; i < arr.length; i++){

        let currentChar = arr[i];
        let currentLongest = [];

        if (!currentLongest.includes(currentChar)) {
            currentLongest.push(currentChar);
        } else {
            longestSub = currentLongest;

            for (let j=i+1; j < arr.length - 1; j++){
                
            }

        }

        


    }

    // turn string into array
    // declare a counter & longest variable; initialize to 0 and empty string
    // loop through each character
    // check if current char === 
    // increment the counter by 1 & longest.concat
    // 

}