// Write a simple .camelCase() method for strings.
// All words must have their first letter capitalized without spaces.
//
// For instance:
// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
//
// SOLUTION:
//

String.prototype.camelCase = function() {

  // split string into array
  return String(this).split(' ')
  
  // map through array and capitalize first letter of each word
  .map(x => x.charAt(0).toUpperCase()
  
  // concatenate the rest of the string to the first letter and join words together
  .concat(x.split('').splice(1,x.length - 1).join(''))).join('');
  
}
