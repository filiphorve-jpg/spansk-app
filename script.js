console.log("script.js er lastet!");

const oppgave = document.getElementById("oppgave");
const tekstfelt = document.getElementById("svar");
const knapp = document.getElementById("sjekk_knapp");
const tilbakemelding = document.getElementById("tilbakemelding");

console.log(knapp);

let fasit = "";

function sjekkSvar() {
  if (tekstfelt.value.trim().toLowerCase() === fasit) {
    tilbakemelding.textContent = "Riktig! 🎉";
    tekstfelt.value = "";
    nyOppgave();
  } else {
    tilbakemelding.textContent = "Feil, riktig svar er " + fasit;
  }
};

knapp.addEventListener("click", sjekkSvar);
tekstfelt.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        sjekkSvar()
    }
});

const oppgaver = [
  { verb: "ver", person: "yo", svar: "veo" },
  { verb: "vivir", person: "nosotros", svar: "vivimos" },
  { verb: "hablar", person: "él/ella", svar: "habla" },
  { verb: "comer", person: "ellos/ellas", svar: "comen" },
  { verb: "poder", person: "yo", svar: "puedo" },
  { verb: "querer", person: "tú", svar: "quieres" },
];

function nyOppgave() {
  const nr = Math.floor(Math.random() * oppgaver.length);
  const valgtOppgave = oppgaver[nr];
  oppgave.textContent = valgtOppgave.verb + " - " + valgtOppgave.person;
  fasit = valgtOppgave.svar;
};

nyOppgave()
