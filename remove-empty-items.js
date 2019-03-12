// remove empty items of array

let clean = arr => arr.filter(item => item || !item);

console.log(clean([undefined,,,, null,, NaN,, false, '', 4, 3, 2, 1, 0]));
// [ undefined, null, NaN, false, '', 4, 3, 2, 1, 0 ]
