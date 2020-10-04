//create handles to page elements
var size = document.getElementById("sizePicker");
var canvas = document.getElementById("pixelCanvas");
var widthObject = document.getElementById("inputWidth");
var heightObject = document.getElementById("inputHeight");
var colorObject = document.getElementById("colorPicker");


//check whether the "Submit" button is clicked
size.onsubmit = function(event){
    event.preventDefault();

    makeGrid();
}
//makes the grid, and also resets colors
function makeGrid() {
    var width = parseInt(widthObject.value);
    var height = parseInt(heightObject.value);
    for (var row = 0; row < height; row++){
        if (canvas.rows[row]){
            var rowObject2 = canvas.rows[row];
            for (var cell = 0; cell < width; cell++){ 
                var cellObject2 = rowObject2.cells[cell]
                if (cellObject2){
                    cellObject2.style.backgroundColor = "white"
                }else{
                    var cellObject2 = rowObject2.insertCell(cell);  
                    //"listens" or detects for clicks, then calls "colorSquare" function   
                    cellObject2.addEventListener("click", colorSquare)  
                }
            }
        } else {
            var rowObject = canvas.insertRow(row);
            for (var cell = 0; cell < width; cell++){ 
                var cellObject = rowObject.insertCell(cell);     
                //"listens" or detects for clicks, then calls "colorSquare" function
                cellObject.addEventListener("click", colorSquare)  
            }
        }

    }
}
//colors the square that you clicked
function colorSquare(event) {
    var cellObject = event.path[0];
    cellObject.style.backgroundColor = colorObject.value
}

