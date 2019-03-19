// REVERSE EACH WORD

let reverseWords = str => {
    return str.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog.");
// ehT kciuq nworb xof spmuj revo eht yzal .god
