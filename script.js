
function fitTextToBox(textbox) {
    let fontSize = 300; // Start large
    textbox.style.fontSize = fontSize + "px";
    while (
        (textbox.scrollWidth > textbox.clientWidth ||
         textbox.scrollHeight > textbox.clientHeight) &&
        fontSize > 10
    ) {
        fontSize--;
        textbox.style.fontSize = fontSize + "px";
    }
}

const textbox = document.querySelector(".textbox");
const input = document.querySelector("#text");

input.addEventListener("input", function(event) {
    event.preventDefault();
    textbox.textContent = this.value;
    fitTextToBox(textbox);
});

// Optional: fit text on page load
fitTextToBox(textbox);

let fontColor = "black"
document.querySelector(".textColor").addEventListener("click", function(){ 
    fontColor == "black" ? fontColor = "white" : fontColor = "black"
    let btnText = "black"
    fontColor == "black" ? btnText = "white" : btnText = "black"
    document.querySelector(".textbox").style.color = fontColor
    document.querySelector(".bgColor").style.color = fontColor
    document.querySelector(".textColor").textContent = ` ${btnText} text`
})


document.querySelector(".bgColor").addEventListener("input", function() {

    document.querySelector(".container").style.backgroundColor = this.value

})

document.querySelector("#blur").addEventListener("input", function() {
    document.querySelector(".textbox").style.filter = `blur(${(this.value/10)}px)`
})

