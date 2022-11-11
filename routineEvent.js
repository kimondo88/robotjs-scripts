// Include the robotjs package
var robot = require("robotjs");
// Timeout to wait if system is slow

const actions = {
    click: [-1186, 784],
}

let times = 0;
let executed = false;

const howManyTimes = 10;
const modifier = 6;

moveAndClick(actions.click[0], actions.click[1], 5, 250);
setTimeout(()  => {monsterKill(howManyTimes*modifier)} , 1000);

function monsterKill(number){
    if(number <= 0){
        return true;
    }
    click(10, 200);
    console.log(number);
    setTimeout(() => {monsterKill(number-1)}, 250);
}

function moveAndClick(x, y, random, baseTime){
    return setTimeout(()=>{
        robot.moveMouse(x, y);
        robot.mouseClick();
        executed = true;
    }, randomTime(random, baseTime))
};

function click(random = 10, baseTime = 250){
    return setTimeout(() => { 
        robot.mouseClick(); 
    }, randomTime(random, baseTime))
};

function randomTime(max, time){
    return time + Math.floor(Math.random() * max);
};