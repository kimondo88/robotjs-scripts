
// Include the robotjs package
var robot = require("robotjs");
const napi = require('uiohook-napi');
const UiohookKey = napi.UiohookKey;
const uIOhook = napi.uIOhook;



// Timeout to wait if system is slow

let holded = false;
let holdedShift = false;

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
        console.log("Ctrl pressed is: ", holded);
    }
    if(e.keycode === UiohookKey["2"]) {
        toggleShift();
        console.log("Shift + Ctrl pressed is: ", holdedShift);
    }
}

//Can learn more about these
//properties from the robotjs site
 
function toggleCtrl(){
    switch(holded){
        case false:
            robot.keyToggle("control", "down");
        case true:
            robot.keyToggle("control", "up");

    }
    
    return holded = !holded;
}

function toggleShift(){
    switch(holdedShift){
        case false:
            robot.keyToggle("control", "down");
            robot.keyToggle("shift", "down");
        case true:
            robot.keyToggle("control", "up");
            robot.keyToggle("shift", "up");
    }
    return holdedShift = !holdedShift;
}

function toggleShiftUp(){
    robot.keyToggle("shift", "up");
    robot.keyToggle("control", "up");
}

uIOhook.start()