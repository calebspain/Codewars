function money_value(s) {
    /* Remove dollar sign */
    result = s.match(/[^$ ]/g);
    if (result) {
        if (result.indexOf('.' + 2) === -1) {
            console.log(result.join('') + '0');
        }
    } else {
        console.log('0.0');
    }
}

money_value('-$ 0.1');


/* Unwanted dollars */
