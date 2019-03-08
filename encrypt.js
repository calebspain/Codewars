let simpleTransposition = (text) => {
    let firstHalf = "";
    let secondHalf = "";
    // add all characters with even indexes to 'firstHalf' and odd indexes to 'secondHalf'
    text.split('').map((char, index, array) => index % 2 === 0 ? firstHalf += char : secondHalf += char);
    // return the combined strings
    return firstHalf + secondHalf;
}

simpleTransposition("Sample text");
