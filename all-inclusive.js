// All Inclusive?

let containAllRots = (str, arr) => {
    // split 'str' into an array
  let newArr = str.split('')
      // get the characters from the index to the end of 'str'
      .map((char, index, str) => str.slice(index, str.length)
           // add the remaining characters to the end and join
          .concat(str.slice(0, index).join('')).join(''));
    // filter out any unnecessary strings in 'arr'
  let originalArr = arr.filter(str => newArr.indexOf(str) > -1);
    // check to see if the length of both arrays match
  return originalArr.length === newArr.length;
}
console.log(containAllRots('bsjq', ['bsjq', 'qbsj', 'sjqb', 'twZNsslC', 'jqbs']));
// true
