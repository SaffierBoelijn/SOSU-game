# Debugging Report – SOSU GAME

Problemen die ik tegenkwam tijdens het bouwen van SOSU, hoe ik ze vond en hoe ik ze oploste.

---

## 1. Muziek laadt niet

**Probleem**
Als ik `index.html` gewoon opende door erop te dubbelklikken, bleef het spel hangen op laden en kwam er geen muziek.

**Foutmelding (console)**
`Access to XMLHttpRequest at 'file:///.../songs/...mp3' from origin 'null' has been blocked by CORS policy`

**Hoe gevonden**
Console geopend met F12 en de rode foutmelding gelezen.

**Oorzaak**
`loadSound()` laadt de mp3 met een request. Vanaf `file://` blokkeert de browser dat.

**Oplossing**
Het spel starten met de VS Code-extensie Live Server. Dit staat nu ook in de README onder "How to run".

---

## 2. Cirkels liepen niet gelijk met de muziek

**Probleem**
Na een tijdje kwamen de cirkels te laat of te vroeg ten opzichte van de beat.

**Hoe gevonden**
Een level uitgespeeld en gemerkt dat het begin goed liep, maar het einde niet meer. Daarna op Google en met AI uitgezocht hoe je in p5.js de tijd van een nummer uitleest (`getAudioContext().currentTime`).

**Oorzaak**
De tijd in het spel telde ik eerst met frames (`gameFrame = gameFrame + 1`). Als de browser minder dan 60 fps haalt, loopt die teller achter op de muziek.

**Oplossing**
De tijd berekenen vanuit de muziek zelf:
```javascript
gameFrame = (getAudioContext().currentTime - songStartTime) * 60;
```
Zo blijven de cirkels altijd gelijk met het nummer.

---

## 3. Klikken op een cirkel telde niet

**Probleem**
Soms klikte ik precies op een cirkel, maar telde het als mis.

**Hoe gevonden**
Door te testen: ik klikte precies op de cirkel en het telde toch als mis. In de p5.js reference gelezen hoe `ellipseMode()` werkt.

**Oorzaak**
In de menu's gebruik ik `ellipseMode(CORNER)`, dan is x/y de linkerbovenhoek. Mijn klikcheck met `dist()` ging uit van het midden van de cirkel.

**Oplossing**
Bij het tekenen van de cirkels in het spel `ellipseMode(CENTER)` gebruiken en daarna terugzetten naar `CORNER`. Nu klopt de klikcheck met wat je ziet.

---

## 4. Na pauze liep de muziek niet gelijk meer

**Probleem**
Na pauze en doorgaan begon het nummer opnieuw, terwijl de cirkels verder gingen.

**Hoe gevonden**
Tijdens het testen van het pauzemenu.

**Oorzaak**
Het nummer werd opnieuw gestart vanaf 0 seconden.

**Oplossing**
Bij doorgaan het nummer starten vanaf het punt waar het stopte, en de starttijd daarop aanpassen:
```javascript
const seconds = gameFrame / 60;
songStartTime = getAudioContext().currentTime - seconds;
songs[chosenLvl].play(0, 1, volumes[0] * volumes[1], seconds);
```

---

## 5. Coins en highscores waren weg na herladen

**Probleem**
Na het verversen van de pagina stonden coins en highscores weer op 0.

**Hoe gevonden**
Pagina ververst na het spelen.

**Oorzaak**
Ze stonden alleen in variabelen, die worden gereset als de pagina opnieuw laadt.

**Oplossing**
Opslaan met `storeItem()` na een level en laden met `getItem()` in `setup()`. Commit: "Coins and highscores will be stored locally now."

---

## Wat ik geleerd heb

- Eerst de console openen en de foutmelding echt lezen.
- Timing in een ritmespel moet van de muziek komen, niet van frames.
- Bij een probleem eerst de p5.js reference checken, en daarna Google of AI als ik er niet uitkom.
