
// Include the robotjs package
var robot = require("robotjs");
const napi = require('uiohook-napi');
const UiohookKey = napi.UiohookKey;
const uIOhook = napi.uIOhook;



// Timeout to wait if system is slow

uIOhook.on('keydown', (e) => {
        executeNormal(e);
    if (e.keycode === UiohookKey.End) {
        toggleShiftUp();
        console.log("Exiting, see ya");
        process.exit(0);
    }
})

function executeNormal(e){
    if(e.keycode === UiohookKey["1"] ) {
        toggleCtrl();
        console.log("Ctrl pressed");
    }
    if(e.keycode === UiohookKey["2"]) {
        toggleShift();
        console.log("Shift + Ctrl pressed");
    }
    if(e.keycode === UiohookKey["3"]) {
        toggleShiftUp();
        console.log("Reset");
    }
}

//Can learn more about these
//properties from the robotjs site
 
function toggleCtrl(){
    robot.keyToggle("control", "down");
}

function toggleShift(){
    robot.keyToggle("control", "down");
    robot.keyToggle("shift", "down");
}

function toggleShiftUp(){
    robot.keyToggle("shift", "up");
    robot.keyToggle("control", "up");
}

uIOhook.start()