let names = 'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno';

let meeting = s =>
    // split the string into an array of seperated names
    s.split(';')
    // map through each name
    .map(x => x.split('')
    // get last name and transform it to uppercase
    .splice(x.indexOf(':') + 1, x.length - x.indexOf(':')).join('').toUpperCase()
    // concatenate the first name to the end of the last name
    .concat(', ' + x.split('').splice(0, x.indexOf(':')).join('')
    // transfom first name to uppercase and sort by last name
    .toUpperCase())).sort()
    // place all names in parenthesis and convert to string 
    .map(x => '(' + x + ')').join('');

console.log(meeting(names));
