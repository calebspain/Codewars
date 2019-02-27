// Our football team finished the championship.
// The result of each match look like "x:y".
// Results of all matches are recorded in the collection.

// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:
// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point

let points = function(games) {
    let sum = 0;
    for (let game of games) {
        if (game.split('')[0] > game.split('')[2]) {
            sum += 3;
        } else if (game.split('')[0] === game.split('')[2]){
            sum += 1;
        }
    }
    return sum;
}
points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]);
