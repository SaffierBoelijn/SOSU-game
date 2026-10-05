# Peer reviews SOSU game

## Review 1 – Eyobed, invalshoek: speler

**Checklist**
- [x] Start de demo: werkt het zonder console-errors? Ja, geen errors.
- [x] Interactie: doen beide acties wat ze moeten doen? Klikken/Z/X raakt cirkels, ESC pauzeert.
- [x] Variabelen/loops/functions/arrays/if's aanwezig en functioneel?
- [ ] Code leesbaar: namen duidelijk, geen duplicatie, geen dode code. (niet bekeken, spelersreview)
- [x] Performance: geen zware berekeningen in `draw()` zonder noodzaak. Speelt soepel.
- [x] README compleet; credits voor externe assets staan erbij.

**Wat goed is**
- Ziet er strak uit, alle schermen hebben dezelfde stijl.
- De muziek en de cirkels lopen gelijk, ook in lange nummers.

**Wat beter kan**
- Naast een cirkel klikken kost een leven én je combo. Dat voelt te streng.
- Store en Buy Coins zeggen "Coming soon" maar reageren niet als je klikt.
- In levelkeuze kies je een level door te hoveren, klikken op de kaart doet niets.

---

## Review 2 – Yasser, invalshoek: code

**Checklist**
- [x] Start de demo: werkt het zonder console-errors?
- [x] Interactie: doen beide acties wat ze moeten doen?
- [x] Variabelen/loops/functions/arrays/if's aanwezig en functioneel? Ruim: constants, for-loops, functies met parameters (`drawButton(label, button, enabled)`), arrays (`balls`, `LEVELS`), veel if/else.
- [ ] Code leesbaar: namen duidelijk, geen duplicatie, geen dode code. Grotendeels, zie verbeterpunten.
- [x] Performance: geen zware berekeningen in `draw()` zonder noodzaak.
- [x] README compleet; credits voor externe assets staan erbij.

**Wat goed is**
- Eén draw- en één klikfunctie per scherm, dat leest makkelijk.
- Herbruikbare functies voor knoppen, balken en panelen.
- Timing via de audio-klok in plaats van frames.

**Wat beter kan**
- Veel losse getallen voor posities (780, 214, 1050, 642). Zet die in constants.
- De leveldata (circa 750 regels) staat onderaan `sketch.js`. Zet die in `src/levels.js`.
- De drie cirkels als achtergrond worden in 4 schermen bijna hetzelfde getekend. Maak er één functie van, bijvoorbeeld `drawRings(x, y, size)`.

---

## Review 3 – Abdelrahman, invalshoek: eisen van de opdracht

**Checklist**
- [x] Start de demo: werkt het zonder console-errors?
- [x] Interactie: doen beide acties wat ze moeten doen?
- [x] Variabelen/loops/functions/arrays/if's aanwezig en functioneel?
- [ ] Code leesbaar: namen duidelijk, geen duplicatie, geen dode code. Magische getallen.
- [x] Performance: geen zware berekeningen in `draw()` zonder noodzaak.
- [x] README compleet; credits voor externe assets staan erbij.

**Eisen Project 101**
- [x] p5.js, canvas ≥ 640×480 (1280×720)
- [x] Minimaal 2 interacties, animatie in `draw()`
- [x] ≥ 5 variabelen incl. const, ≥ 1 loop, ≥ 2 functies met parameters, array ≥ 20, ≥ 3 if's
- [x] `index.html` + `src/sketch.js`
- [x] Repo in HvA GitLab, ≥ 6 commits
- [ ] Geen magische getallen → nog veel losse posities
- [x] README met beschrijving, controls, runnen, credits

**Wat beter kan**
- De aftelling bij "OUT OF LIVES" telt in frames. Bij lage fps duurt hij langer dan 10 seconden. Gebruik `millis()`.
- Highscore wordt niet opgeslagen als je via Quit stopt.
