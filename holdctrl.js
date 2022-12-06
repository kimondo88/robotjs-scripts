
// Include the robotjs package
var robot = require("robotjs");
const napi = require('uiohook-napi');
const UiohookKey = napi.UiohookKey;
const uIOhook = napi.uIOhook;



// Timeout to wait if system is slow

let holded = false;
let holdedShift = false;
let original = 1;
let shift = 1;

uIOhook.on('keydown', (e) => {
    if(original === 1 && shift === 1) {
        executeNormal(e);
    }else if(original === 2) {
        original = 1;
    }
    else if(shift === 2){
        shift = 1;
    }
    if (e.keycode === UiohookKey.End) {
        toggleShiftUp();
        console.log("Exiting, see ya");
        process.exit(0);
    }
})

function executeNormal(e){
    if(e.keycode === UiohookKey.Ctrl ) {
        toggleCtrl();
        console.log("Ctrl pressed is: ", holded);
    }
    if(e.keycode === UiohookKey.Shift) {
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
            original += 1;
        case true:
            robot.keyToggle("control", "up");

    }
    
    return holded = !holded;
}

function toggleShift(){
    switch(holdedShift){
        case false:
            robot.keyToggle("control", "down");
            original += 1;
            robot.keyToggle("shift", "down");
            shift += 1;
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