let  duplicateEncode = word => {
    word = word.toLowerCase().split("");
    return word.map(char => word.indexOf(char) === word.lastIndexOf(char) ? "(" : ")").join("");
}

duplicateEncode("Success"); // ")())())"
