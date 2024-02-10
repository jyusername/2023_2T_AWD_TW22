function hideCurrentBox() {
    let currentBox = document.getElementById("box-cont");
    currentBox.style.opacity = 0;
    currentBox.style.transform = "translateY(-100%)";
}

function change(color) {
    hideCurrentBox(); 

    setTimeout(function () {
        let boxCont = document.getElementById("box-cont");

       
        boxCont.style.borderColor = color;

        
        let lighterColor = tinycolor(color).lighten(20).toString(); 

        
        boxCont.style.backgroundColor = lighterColor + "99"; 

        // Fade-in animation
        boxCont.style.opacity = 1;

        // Move down to the center
        boxCont.style.transform = "translateY(0)";

        // Set background color to white after the animation
        setTimeout(function () {
            boxCont.style.backgroundColor = "white";
        }, 800); // Adjust the delay as needed

    }, 1000); // 1000 milliseconds delay (1 second)
}
