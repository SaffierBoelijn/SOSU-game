# SOSU-game

SOSU is a rhythm game in the style of osu!, made with p5.js for Programming 101.
Numbered circles appear on the beat of a song, each with a ring that shrinks. Click the circle exactly when the ring touches it. The better your timing, the more points you get (Perfect 300, Good 100). Miss too often and you run out of lives.

There are 3 levels (Easy, Normal and Hard), each with its own song. Points earn you coins, and your coins and highscores are saved in your browser.

**Live demo:** https://sosu.saffierb.nl

---

## Controls

| Key | What it does |
| --- | --- |
| Mouse click | Hit the circle under your mouse / buttons in the menus |
| Z or X | Hit the circle under your mouse |
| ESC | Pause and resume the game |
| ENTER | Start the selected level (in level select) |

---

## How to run

The game loads mp3 files, so it has to run on a (local) server. Just double-clicking `index.html` won't work.

1. Clone the repo.
2. Open the folder in VS Code.
3. Start `index.html` with the **Live Server** extension (right-click → *Open with Live Server*).
4. Click **START** in the menu, choose a level and press **PLAY**.

---

## Files

- `index.html` – loads p5.js, p5.sound and the sketch
- `sketch.js` – all the game code
- `style.css` – centers the canvas
- `libraries/` – p5.js and p5.sound
- `songs/` – the 3 songs
- `framework/` – sketches and screen flow of the game
- `md files/` – README and user stories

---

## Credits

- **p5.js** and **p5.sound** – https://p5js.org
- Idea and gameplay based on **osu!** – https://osu.ppy.sh
- Music (only used for this school project):
  - Level 1: *Duvet* – bôa
  - Level 2: *wheredoistart* – Ken Carson
  - Level 3: *Choppa Won't Miss* – Playboi Carti

---

## Peer review checklist (by one or more fellow students)

- [ ] Run the demo: does it work without console errors?
- [ ] Interaction: do both actions do what they should?
- [ ] Variables/loops/functions/arrays/ifs present and working?
- [ ] Code readable: clear names, no duplication, no dead code.
- [ ] Performance: no heavy calculations in `draw()` without need.
- [ ] README complete; credits for external assets included.
