
// Include the robotjs package
var robot = require("robotjs");
const napi = require('uiohook-napi');
const UiohookKey = napi.UiohookKey;
const uIOhook = napi.uIOhook;

// Timeout to wait if system is slow

let exit = true;

uIOhook.on('keydown', (e) => {
    if (e.keycode === UiohookKey.End) {
        toggleShiftUp();
        exit = false;
        console.log("Exiting, see ya");
        process.exit(0);
    }
})

const base = 1500;

setTimeout(toggleShift, base);

//Can learn more about these
//properties from the robotjs site
 
function toggleShift(){
    robot.keyToggle("shift", "down");
    robot.keyToggle("control", "down");
}

function toggleShiftUp(){
    robot.keyToggle("shift", "up");
    robot.keyToggle("control", "up");
}

uIOhook.start()