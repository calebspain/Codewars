"use strict";

class Person {
    constructor(firstAndLast) {
        // declare and initialize firstName and lastName
        // but do not assign them to the object
        let firstName = firstAndLast.split(" ")[0];
        let lastName = firstAndLast.split(" ")[1];

        // set methods
        this.setFirstName = first => firstName = first;
        this.setLastName = last => lastName = last;
        this.setFullName = firstAndLast => {
            firstName = firstAndLast.split(" ")[0];
            lastName = firstAndLast.split(" ")[1];
        }

        // get methods
        this.getFirstName = () => firstName;
        this.getLastName = () => lastName;
        this.getFullName = () => `${firstName} ${lastName}`;
    }
}
  
let bob = new Person("Bob Ross");
bob.setFirstName("Haskell")
bob.getFullName(); // Haskell Ross
