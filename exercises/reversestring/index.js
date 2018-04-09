// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// --- Steps for the solution:
// Turn 'str' into an array
// Call 'reverse' method on the array
// Join the array back into a string
// Return the result

function reverse(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

module.exports = reverse;
