// Given a string, find the length of the longest substring without repeating characters.

const longestSubstring = str => {
    let arr = [];

    for (let i=0; i < str.length-1; i++){
        for (let j=i+1; j < str.length; j++){
            let substr = str.slice(i,j);
            arr.push(substr);
        }
    }
    
    let alphabet = [];
    for (let i=0; i < 26; i++){
        alphabet.push(String.fromCharCode(97+i));
    }

    let selected = [];
    for (let i=0; i < arr.length; i++){
        
    }

    
}

longestSubstring("abcabcbb");

// find all combinations of consecutive letters in str
// check substr w/ no repeated alphabets
// return longest length