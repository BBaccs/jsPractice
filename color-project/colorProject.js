//Set Variables


let stripe = document.querySelector("#stripe");
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let message = document.querySelector("#message");
let colors = generateRandomColors(6);
let winningColor = pickWinningColor();

//functions
function pickWinningColor() {
	let random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
    //make an array
    var array = []
    //add num random colors to array
    for(var i = 0; i < num; i++) {
         //get random color and PUSH into array
         array.push(generateColor())
    }
    //return array
    return array;
}

function generateColor(){
    //pick red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick green from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick blue from 0 - 255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

 
function changeColors() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = winningColor;
    }
}




for (var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        if(this.style.backgroundColor == winningColor) {
            message.textContent = "Correct!";
            h1.style.backgroundColor = winningColor;
            changeColors(winningColor);
        } else {
            this.style.background = "#232323";
            message.textContent = "Try Again!";
            
        }
    });
}



