function makeLine(size, singleChar = '#') {
    let hashtag = '';
    for (let index = 0; index < size; index++) {
        hashtag += singleChar;
    }
    return hashtag;
} console.log(makeLine(5, 'a'));

function makeSquare(size, singleChar) {
    let square = makeRectangle(size, size, singleChar);
     return square;
} console.log(makeSquare(2, 'b'));

function makeRectangle(width, height, singleChar) {
    let rectangle = '';
    for (let index = 0; index < height; index++) {
        rectangle += (makeLine(width, singleChar) + '\n');
    } return rectangle.slice(0, -1);
} console.log(makeRectangle(3,2, 'c'));

function makeDownwardStairs(height, singleChar) {
    let stairs = ''
    for (let index = 0; index < height; index++) {
        stairs += (makeLine(index + 1, singleChar) + '\n');
    } return stairs.slice(0, -1);
} console.log(makeDownwardStairs(5, 'd'));

function makeSpaceLine(numSpaces, numChars, singleChar) {
    let spaceLine = '';
    let spaces = '';
    for (let index = 0; index < numSpaces; index++) {
        spaces += ' ';
    } spaceLine = (spaces + makeLine(numChars, singleChar) + spaces);
    return spaceLine;
} console.log(makeSpaceLine(3, 5, 'e'));

function makeIsoscelesTriangle(height, singleChar) {
    let triangle = '';
    for (let index = 0; index < height; index++) {
        triangle += (makeSpaceLine((height - index - 1), (2 * index + 1), singleChar) + '\n');
    } return triangle.slice(0, -1);
} console.log(makeIsoscelesTriangle(5, 'f'));

function reverse(str) {
    return str.split('').reverse().join('');
}

function makeDiamond(height, singleChar) {;
    return makeIsoscelesTriangle(height, singleChar) + '\n' + reverse(makeIsoscelesTriangle(height, singleChar));
} console.log(makeDiamond(5, 'g'));