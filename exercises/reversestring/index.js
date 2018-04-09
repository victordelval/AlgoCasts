// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var characterArray = str.split('');
    var reverseArray = characterArray.reverse();
    return reverseArray.join('');
}

module.exports = reverse;
