console.log("script.js er lastet!");

const oppgave = document.getElementById("oppgave");
const tekstfelt = document.getElementById("svar");
const knapp = document.getElementById("sjekk_knapp");
const tilbakemelding = document.getElementById("tilbakemelding");
const poengteller = document.getElementById("poengteller");
const forklaringstekst = document.getElementById("forklaringstekst");

console.log(knapp);

let fasit = "";
let poeng = 0;
let forklaring = "";

function sjekkSvar() {
  if (tekstfelt.value.trim().toLowerCase() === fasit) {
    tilbakemelding.textContent = "Riktig! 🎉";
    tilbakemelding.classList.add("riktig"); // sett på grønn lapp
    tilbakemelding.classList.remove("feil"); // ta av rød lapp, hvis den finnes
    tekstfelt.value = "";
    forklaringstekst.textContent = "";
    poeng++;
    nyOppgave();
    visPoeng();
  } else {
    tilbakemelding.textContent = "Feil, riktig svar er " + fasit;
    tilbakemelding.classList.add("feil"); // sett på rød lapp
    tilbakemelding.classList.remove("riktig"); // ta av grønn lapp, hvis den finnes
    forklaringstekst.textContent = forklaring;
    poeng = 0;
    visPoeng();
  }
}

function visPoeng() {
  poengteller.textContent = poeng + " på rad";
}

knapp.addEventListener("click", sjekkSvar);
tekstfelt.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sjekkSvar();
  }
});

const oppgaver = [
  { verb: "ver", person: "yo", svar: "veo", forklaring: "Ver beholder e-en i yo-form: veo, ikke vo." },
  { verb: "vivir", person: "nosotros", svar: "vivimos", forklaring: "-ir-verb får -imos i nosotros-form" },
  { verb: "hablar", person: "él/ella", svar: "habla", forklaring: "-ar-verb får -a i él/ella-form: fjern -ar og legg til -a." },
  { verb: "comer", person: "ellos/ellas", svar: "comen", forklaring: "-er-verb får -en i ellos/ellas-form." },
  { verb: "poder", person: "yo", svar: "puedo", forklaring: "	Poder er stammeskiftende: o blir til ue (pued-). Gjelder ikke nosotros og vosotros." },
  { verb: "querer", person: "tú", svar: "quieres", forklaring: "Querer er stammeskiftende: e blir til ie (quier-). Gjelder ikke nosotros og vosotros." },
];

function nyOppgave() {
  const nr = Math.floor(Math.random() * oppgaver.length);
  const valgtOppgave = oppgaver[nr];
  oppgave.textContent = valgtOppgave.verb + " - " + valgtOppgave.person;
  fasit = valgtOppgave.svar;
  forklaring = valgtOppgave.forklaring;
}

nyOppgave();
