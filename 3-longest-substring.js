// Given a string, find the length of the longest substring without repeating characters.

// Attemp 1
const lengthOfLongestSubstring = str => {

    let length = 0;
    let unique = new Set;

    for (let i = 0; i < str.length; i++) {

        if (!unique.has(str[i])) {
            unique.add(str[i])
            console.log(unique)
            let a = i;
        } else {
            if (unique.size > length) {
                length = unique.size
                unique.clear();
                unique.add(str[i]);
                a = i + 1;
            }
        }
    }

    if (unique.size > length) {
        length = unique.size
        unique.clear();
    }

    return length
};

// iterate through str
// selected = 

lengthOfLongestSubstring("abcabcbb");


// Attempt 2
const lengthOfLongestSubstring = (str) => {

    // Checks if given string is unique; returns boolean
    const allUnique = str => {
        let set = new Set;
        for (let i = 0; i < str.length; i++) {
            set.add(str[i])
        }

        return (set.size === str.length);
    }

    let length = 0;
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            let subStr = str.slice(i, j);
            if (allUnique(subStr) && subStr.length > length) {
                length = subStr.length
            }
        }
    }

    return length;
};