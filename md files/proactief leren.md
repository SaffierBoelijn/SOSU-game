# Proactief leren – SOSU GAME

## Mijn planning

Ik plande per scherm van het spel: elke dag één of twee schermen af.

| Dag | Gepland | Gedaan (volgens commits) | Gehaald? |
| --- | --- | --- | --- |
| di 29-09 | Project opzetten, basis hoofdmenu | Project opgezet, basis hoofdmenu (17:28 – 21:47) | Ja |
| wo 30-09 | Hoofdmenu + levelkeuze, pauzemenu, resultaten | Levelkeuze (01:04), pauzemenu, doorgaan met coins, resultaten (15:54 – 23:24) | Ja |
| do 01-10 | Optiemenu | Optiemenu af om 01:08 op vrijdag | Net niet, liep de nacht in |
| vr 02-10 | Gamescherm met muziek | Gamescherm met 3 nummers af om 04:33 op zaterdag | Nee, kostte veel meer tijd |
| za 03-10 – zo 04-10 | Uitloop | Niet aan gewerkt | – |
| ma 05-10 | Code opschonen, user stories, README | Code opgeschoond, coins/highscores opslaan, user stories met feedback, README, sketch naar `src/` | Ja |

## Klopte mijn planning?

- Ik heb het spel scherm voor scherm gebouwd, en dat werkte goed: elk scherm was een duidelijk stuk werk met een eigen commit.
- Het gamescherm met de muziek kostte veel meer tijd dan de menu's. Dat had ik onderschat.
- Ik heb vaak 's nachts gewerkt (01:04, 01:08, 04:33). Dat komt doordat ik overdag werk en andere activiteiten heb, en 's nachts juist tijd heb. Het werk kwam af, maar het is niet goed vol te houden en de planning liep daardoor uit.

## Hulp vragen

Als ik vastliep zocht ik het eerst zelf op in de **p5.js reference**. Kwam ik er dan niet uit, dan zocht ik op **Google** of vroeg ik het aan **AI**.

Voorbeeld: de cirkels liepen na een tijdje niet meer gelijk met de muziek.
- **Wat wilde ik bereiken?** Dat de cirkels precies op de beat komen, het hele nummer lang.
- **Wat had ik al geprobeerd?** De tijd tellen met frames (`gameFrame + 1`).
- **Wat gebeurde er?** Na een tijdje liepen de cirkels voor of achter op de muziek.
- **Wat leverde het op?** Via Google en AI vond ik dat je de tijd uit de muziek zelf kunt halen met `getAudioContext().currentTime`. Daarmee loopt het nu gelijk.

## Aantekeningen

- Debugging Report: `md files/debugging report.md`
- User stories: `md files/users story.md`

## Wat ik volgende sprint anders doe

- Vooraf per dag plannen wat ik ga doen en aan het eind van de dag checken of het gelukt is.
- Overdag werken in plaats van 's nachts.
- Moeilijke onderdelen (zoals de timing met muziek) eerder beginnen, omdat die meer tijd kosten.
