import { guessList } from "./data/guess.js";

var guessName;
var guessAlt;

function getURLParameter() {
    let sPageURL = window.location.search.substring(1);
    let a = sPageURL[5] == '0' ? '' : sPageURL[5];
    let b = sPageURL[2] == '0' ? '' : sPageURL[2];

    let guessId = a + b + sPageURL[3];
    let guess = guessList[guessId];

    guessName = guess["name"];
    guessAlt = guess["alt"];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


getURLParameter()
let guessText = document.getElementById("guess_name");
guessText.innerHTML = guessText.innerHTML.replace("{{guess_name}}", guessName);

let guessAltText = document.getElementById("guess_alt");
guessAltText.innerHTML = guessAltText.innerHTML.replace("{{guess_alt}}", guessAlt);
sleep(1000).then(() => {
    let envelopWrapper = document.getElementById("wrapper");
    envelopWrapper.classList.add("open");
})