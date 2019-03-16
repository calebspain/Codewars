function longestConsec(strarr, k) {
    let result = ""
    let sortedStrings = [];
    strarr.sort((a, b) => b.length - a.length).map(str => sortedStrings.indexOf(str) > -1 ? "" : sortedStrings.push(str));
    for (let i = 0; i < k; i++) {
        result += sortedStrings[i];
    }
    return result;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));
