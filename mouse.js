//Include robotjs package
var robot = require("robotjs");
 
//Show mouse location wherever it is pointing 
var id = setInterval(showMouseLocation,1000);
 
//function that
function showMouseLocation(){
var mousePosition = robot.getMousePos();
console.log(mousePosition);
//Terminate the program
//whenever mouse points
//at top left corner
//or press ctrl+c to terminate
if(mousePosition.x == 0 && mousePosition.y == 0){
    clearInterval(id); 
}
}