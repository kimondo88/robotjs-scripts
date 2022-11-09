
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


setTimeout(startOPM, 1000);
//setTimeout(startInstantPatrol, 3000);
setTimeout(startMailClaim, 3000);
setTimeout(startFriendClaim, 8000);
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
    moveAndClick(actions.ipclaim[0], actions.ipclaim[1], 10, 750);
    moveAndClick(actions.ipclaimbutton[0], actions.ipclaimbutton[1], 30, 1250);
};

//claiming mails

function startMailClaim(){
    moveAndClickInstant(actions.mailicon[0], actions.mailicon[1]);
    moveAndClick(actions.mailclaim[0], actions.mailclaim[1], 10, 750)
    click(10, 250);
    moveAndClick(actions.exit[0], actions.exit[1], 30, 2550);
};

//friends claim

function startFriendClaim(){
    moveAndClickInstant(actions.friendsIcon[0], actions.friendsIcon[1]);
    moveAndClick(actions.friendsClaim[0], actions.friendsClaim[1], 10, 250);
    click(10, 250);
    moveAndClick(actions.exit[0], actions.exit[1], 30, 2550);
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

function moveAndClickInstant(x, y){
        robot.moveMouse(x, y);
        robot.mouseClick();
};