var guessName;
var guessAlt;

function getURLParameter() {
    let sPageURL = window.location.search.substring(1);
    let sURLVariables = sPageURL.split('&');

    guessName = sURLVariables[0].split('=')[1];
    guessAlt = sURLVariables[1].split('=')[1];
}

function decode(str) {
    // Decode the String
    var decodedString = decodeURIComponent(atob(str));
    console.log(decodedString);

    return decodedString;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

getURLParameter()
let guessText = document.getElementById("guess_name");
guessText.innerHTML = guessText.innerHTML.replace("{{guess_name}}", decode(guessName));

let guessAltText = document.getElementById("guess_alt");
guessAltText.innerHTML = guessAltText.innerHTML.replace("{{guess_alt}}", decode(guessAlt));


sleep(1000).then(() => {
    let envelopWrapper = document.getElementById("wrapper");
    envelopWrapper.classList.add("open");
})

function encode(guess) {
    var encodedString = btoa(encodeURIComponent(guess));
    console.log(encodedString);
}