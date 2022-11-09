
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
    mailexit: [-1801 , 110],
}


setTimeout(startOPM, 1000);
setTimeout(startInstantPatrol, 3000);

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

function startInstantPatrol(){
    robot.moveMouse(actions.instantpatrol[0], actions.instantpatrol[1]);
    robot.mouseClick();
    setTimeout(()=>{
        robot.moveMouse(actions.ipclaim[0], actions.ipclaim[1]);
        robot.mouseClick();
    }, randomTime(10, 750))
    setTimeout(()=>{
        robot.moveMouse(actions.ipclaimbutton[0], actions.ipclaimbutton[1]);
        robot.mouseClick();
    }, randomTime(30, 1250))
};

function randomTime(max, time){
    return time + Math.floor(Math.random() * max);
}