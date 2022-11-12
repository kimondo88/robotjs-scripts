
// Include the robotjs package
var robot = require("robotjs");
// Timeout to wait if system is slow

const actions = {
    patrol: [-1515, 649],
    pclaim: [-1170, 656],
    instantpatrol: [-825, 804],
    ipclaim: [-1021, 608],
    ipclaimbutton: [-1158, 774],
    mailicon: [-551, 119],
    mailclaim: [-1500, 789 ],
    exit: [-1801 , 110],
    friendsIcon: [-638, 118],
    friendsClaim: [-819, 801]
}

const base = 1500;
const back = moveAndClick(actions.exit[0], actions.exit[1], 30, base);

setTimeout(startOPM, base-500);
setTimeout(startInstantPatrol, base*2);
setTimeout(startMailClaim, base*5);
setTimeout(startFriendClaim, base*9);
//Opening the openboard
//Can learn more about these
//properties from the robotjs site
 
function startOPM(){
    robot.moveMouse(actions.patrol[0], actions.patrol[1]);
    robot.mouseClick();
    setTimeout(()=>{
        robot.moveMouse(actions.pclaim[0], actions.pclaim[1]);
        robot.mouseClick();
    }, randomTime(50, 800))
};

//claiming instant patrol

function startInstantPatrol(){
    moveAndClickInstant(actions.instantpatrol[0], actions.instantpatrol[1]);
    moveAndClick(actions.ipclaim[0], actions.ipclaim[1], 10, base/2);
    moveAndClick(actions.ipclaimbutton[0], actions.ipclaimbutton[1], 30, base);
};

//claiming mails then back to main menu

function startMailClaim(){
    moveAndClickInstant(actions.mailicon[0], actions.mailicon[1]);
    moveAndClick(actions.mailclaim[0], actions.mailclaim[1], 10, base/2)
    click(10, 250);
    back;
};

//friends claim then back to main menu

function startFriendClaim(){
    moveAndClickInstant(actions.friendsIcon[0], actions.friendsIcon[1]);
    moveAndClick(actions.friendsClaim[0], actions.friendsClaim[1], 10, base/5);
    click(10, base/3);
    back;
};

function randomTime(max, time){
    return time + Math.floor(Math.random() * max);
};

function click(random = 10, baseTime = 250){
    return setTimeout(() => { 
        robot.mouseClick(); 
    }, randomTime(random, baseTime))
};

function moveAndClick(x, y, random, baseTime){
    return setTimeout(()=>{
        robot.moveMouse(x, y);
        robot.mouseClick();
    }, randomTime(random, baseTime))
};

/** move to coordinates x and y then click
 * 
 * @param {int} x width coordinate
 * @param {int} y height coordinate
 */

function moveAndClickInstant(x, y){
        robot.moveMouse(x, y);
        robot.mouseClick();
};