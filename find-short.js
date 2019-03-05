// Find The Length Of The Shortest Word

let str = 'Ripple ProofOfStake Dogecoin Steem ProofOfStake ProofOfWork Steem ProofOfStake Monero Dash LiteCoin Mine Ripple Mine Waves';

let findShort = s => 
    // split string into array of words
    s.split(' ')
        // create an array containing the lengths of each word
        .map(word => word.length)
            // sort the lengths from least to greatest and get first
            .sort((a, b) => a - b)[0];

findShort(str); // 4
