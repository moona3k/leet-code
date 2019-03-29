// O(n^3) time complexity

const longestPalindrome = function (s) {

    const isPalindrome = (str) => {
        return str === str.split("").reverse().join("");
    }
    
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substr = s.slice(i, j);
            if (isPalindrome(substr) && substr.length >= longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
};