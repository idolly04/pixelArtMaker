// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let h = document.getElementById("inputHeight").value*1;
  let w = document.getElementById("inputWidth").value*1;
  let canvas = document.getElementById("pixelCanvas");
  canvas.innerHTML = "";
  /*if(canvas !== ""){
	document.getElementById("pixelCanvas").innerHTML="";
}*/
  // create rows depend on user input
  for(let r = 0; r < h; r++) {

  	let row = canvas.insertRow();
    for(let c = 0; c < w; c++) {
      // create cell in each row
      let col = row.insertCell();
      col.addEventListener('click', function(e) {
        let picker = document.getElementById("colorPicker").value;
        e.target.style.backgroundColor = picker;
    });
}
}}

let sizePicker = document.getElementById("sizePicker");
sizePicker.addEventListener('submit', function(e) {
  e.preventDefault();
  makeGrid();

});


