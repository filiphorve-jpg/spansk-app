# Læringslogg – spansk-app

---

## 2026-11-19 – Fase 1: Verbdrill ferdig

**Hva jeg gjorde**
- Bygde verbdrill i ren HTML, CSS og JavaScript
- Steg 1–2: HTML-struktur med id-er, hentet elementer med getElementById
- Steg 3: funksjonen sjekkSvar med if/else, koblet til knappen med addEventListener
- Steg 4: array med oppgave-objekter (verb, person, svar) og tilfeldig valg
- Steg 5a: Enter-tast med keydown og event.key, tilgivende sjekk med trim() og toLowerCase()
- Steg 5b: poengteller som rekke på rad, egen funksjon visPoeng()
- Steg 5c: style.css med fargepalett i CSS-variabler, sentrert kort, mobilvennlig felt og knapp, grønn/rød tilbakemelding med classList

**Hva jeg lærte**
- Et tall fra Math.random er bare en indeks: oppgaver[nr] henter selve objektet
- Punktum henter en del av et objekt: valgtOppgave.verb
- En vanlig variabel har ingen textContent, det har bare elementer på siden
- Å lage en funksjon er ikke det samme som å kalle den
- Semikolon kommer etter en instruksjon, ikke etter } som avslutter en funksjon
- En test som alltid skriver «det funker» tester ingenting: logg selve variabelen
- Gjentatt kode er et tegn på at den bør bli en funksjon
- Rekkefølgen i HTML er rekkefølgen på skjermen
- Mobile first: max-width + width 100% gjør at media queries ikke trengs ennå
- JS setter klasser (classList), CSS bestemmer utseendet

**Problemer og løsning**
- True i stedet for true (Python-vane)
- Math.floorMath: skrivefeil, fant den i konsollen
- valgtOppgave[verb] uten anførselstegn: JS lette etter en variabel som heter verb

**Neste gang**
- Fase 2: oppgavene i egen JSON-fil, lagre poeng/streak med localStorage, norsk forklaring per oppgave

---

## 2026-11-19 – Fase 0: Oppsett ferdig

**Hva jeg gjorde**
- Opprettet public repo `spansk-app` på GitHub
- Klonet repoet til `~/Prosjekter` på Mac-en
- Laget første `index.html` med grunnskjelett (snarvei: `!` + Tab i VS Code)
- Commit og push til GitHub
- Slo på GitHub Pages: https://filiphorve-jpg.github.io/spansk-app/

**Hva jeg lærte**
- Forskjellen på `git add` (staging), `git commit` (lokal lagring) og `git push` (opp til GitHub)
- `git status` må kjøres inne i repo-mappen, ellers kommer «not a git repository»
- Mac bruker `/` og `~` i stier, Windows bruker `C:\`
- Repoet ligger ikke i Dropbox: GitHub synkroniserer mellom maskinene
- Public repo betyr at alle ser koden, så API-nøkler skal aldri ligge der

**Problemer og løsning**
- Fant ikke mappen: brukte Windows-sti på Mac, laget `~/Prosjekter` i stedet
- `fatal: not a git repository`: sto i `Prosjekter`, ikke i `spansk-app`

**Neste gang**
- Fase 1: verbdrill i ren JavaScript

---