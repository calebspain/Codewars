"use strict";
let dayAndTime = seconds => {
    const DATE = new Date(2019, 0, 6, 0, seconds);
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `${DAYS[DATE.getDay()]} ${DATE.getHours() < 10 ? "0".concat(DATE.getHours()) : DATE.getHours()}:` + 
        `${DATE.getMinutes() < 10 ? "0".concat(DATE.getMinutes()) : DATE.getMinutes()}`;
}

dayAndTime(-349000); // Tuesday 15:20
