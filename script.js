console.log("script.js er lastet!");

const oppgave = document.getElementById("oppgave");
const tekstfelt = document.getElementById("svar");
const knapp = document.getElementById("sjekk_knapp");
const tilbakemelding = document.getElementById("tilbakemelding");

console.log(knapp);

oppgave.textContent = "comer - tú";

var fasit = "comes";

function sjekkSvar() {
    if (tekstfelt.value === fasit) {
    tilbakemelding.textContent = "Riktig! 🎉";
    } else {
    tilbakemelding.textContent = "Feil, riktig svar er " + fasit;
    }
}

knapp.addEventListener("click", sjekkSvar);
