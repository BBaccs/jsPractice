//set variables
let lis = document.querySelectorAll("li");

//loop through li's
for(var i = 0; i < lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}



for(var i = 0; i < codes.length; i++) {
    codes[i].print("here's a code!");
}