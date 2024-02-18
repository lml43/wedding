import { guessList } from "./data/guess.js";

var guessName;
var guessAlt;

function getURLParameter() {
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');

    let guessId = sURLVariables[0].split('=')[1];
    let guess = guessList[guessId]

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