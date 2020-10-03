var size = document.getElementById("sizePicker");
var widthObject = document.getElementById("inputWidth");
var canvas = document.getElementById("pixelCanvas");
var heightObject = document.getElementById("inputHeight");
var colorObject = document.getElementById("colorPicker");

size.onsubmit = function(event){
    event.preventDefault();

    makeGrid();
}

function makeGrid() {
    var width = parseInt(widthObject.value);
    var height = parseInt(heightObject.value);
    for (var row = 0; row < height; row++){
        var rowObject = canvas.insertRow(row);
        console.log("make!");
        for (var cell = 0; cell < width; cell++){ 
            var cellObject = rowObject.insertCell(cell);   
            
        }
    }
}
