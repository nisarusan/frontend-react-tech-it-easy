const fs = require('fs');

function readMoves(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return data.split('\r\n');
}

function determineRound(movesArray) {
    const movePoints = {
        'AX': 4,
        'AY': 8,
        'AZ': 3,
        'BX': 1,
        'BY': 5,
        'BZ': 9,
        'CX': 7,
        'CY': 2,
        'CZ': 6,
    };

    let total_points = 0;

    for (const move of movesArray) {
        const key = move.substring(0, 2);
        if (key in movePoints) {
            total_points += movePoints[key];
            console.log(`${move} - ${key}`);
        } else {
            console.log(`Invalid move: ${move}`);
        }
    }

    return total_points;
}

const movesArray = readMoves('input.txt');
console.log(movesArray);
const total_points = determineRound(movesArray);
console.log(total_points);