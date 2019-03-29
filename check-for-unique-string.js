const uniqueStr = (str) => {

    let set = new Set;
    for (let i = 0; i < str.length; i++){
        if (set.has(str[i])){
            return false;
        }
        set.add(str[i]);
    }
    return true;
};

const allUnique = str => {
    let set = new Set;
    for (let i = 0; i < str.length; i++) {
        set.add(str[i])
    }

    return (set.size === str.length);
}