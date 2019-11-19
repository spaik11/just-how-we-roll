/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/*************************
 * RANDOM ROLL GENERATOR *
 *************************/


function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
function rollD6() {
    const result = getRandomNumber(6);
    sixes.push(result);
    d6.src = `./images/d6/${result}.png`

    document.querySelector('#d6-rolls-mean').innerText = getMean(sixes).toFixed(2)
    document.querySelector('#d6-rolls-median').innerText = getMed(sixes).toFixed(0)

}

function rollDoubleD6() {
    const result1 = getRandomNumber(6);
    const result2 = getRandomNumber(6);

    doubleSixes.push(result1 + result2);
    document.querySelector('#double-d6-roll-1').src = `./images/d6/${result1}.png`
    document.querySelector('#double-d6-roll-2').src = `./images/d6/${result2}.png`
}

function rollTwelves() {
    const result = getRandomNumber(12);
    twelves.push(result);
    d12.src = `./images/numbers/${result}.png`
}

function rollTwenty() {
    const result = getRandomNumber(20)
    twelves.push(result);
    d20.src = `./images/numbers/${result}.png`
}
/*******************
 * EVENT LISTENERS *
 *******************/
const d6 = document.querySelector('#d6-roll');
const d12 = document.querySelector('#d12-roll')
const d20 = document.querySelector('#d20-roll')

d6.src = './images/start/d6.png';
d6.addEventListener('click', rollD6)

document.querySelector('#double-d6-roll-1').src = './images/start/d6.png';
document.querySelector('#double-d6-roll-2').src = './images/start/d6.png';
document.querySelector('#double-d6-roll-1').addEventListener('click', rollDoubleD6)
document.querySelector('#double-d6-roll-2').addEventListener('click', rollDoubleD6)

d12.src = './images/start/d12.jpeg';
d12.addEventListener('click', rollTwelves)

d20.src = './images/start/d20.jpg';
d20.addEventListener('click', rollTwenty)


/****************
 * MATH SECTION *
 ****************/
function getMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length
}

function getMed(arr) {
    const mid = Math.floor(arr.length / 2)
    let nums = arr.sort((a, b) => a - b);

    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function getMode() {

}

/*********
 * RESET *
 *********/
