//COLORS
const COLOR_BACKGROUND = "#1E1B2E"; // achtergrond
const COLOR_CARD = "#2B2640";       // kaarten en balken
const COLOR_PANEL = "#3A3452";      // lichtere vlakken
const COLOR_BORDER = "#5A5280";     // randen
const COLOR_PINK = "#FF66AA";       // knoppen en selectie
const COLOR_BLUE = "#66CCFF";       // krimpende ringen
const COLOR_YELLOW = "#FFD166";     // rang
const COLOR_TEXT = "#FFFFFF";       // tekst
const COLOR_SUBTEXT = "#A9A3C4";    // grijze tekst


//LEVELS
const LEVELS = [
  { name: "Level 1", song: "Song 1 – Artist", difficulty: "Easy", stars: 1, highscore: 0, notes: 0, length: 80, file: "songs/song1.mp3" },
  { name: "Level 2", song: "Song 2 – Artist", difficulty: "Normal", stars: 3, highscore: 0, notes: 0, length: 105, file: "songs/song2.mp3" },
  { name: "Level 3", song: "Song 3 – Artist", difficulty: "Hard", stars: 5, highscore: 0, notes: 0, length: 130, file: "songs/song3.mp3" }
];


//VARIABLES
let currentScreen = "menu";
let coins = 0;
let chosenLvl = 0;
let songs = [];
let score = 0;
let highestCombo = 0;
let perfectHits = 0;
let goodHits = 0;
let missHits = 0;
let coinsEarned = 0;
let previousScreen;
let optionsTab = 0;
const VOLUME_LABELS = ["Master", "Music", "Effects"];
const volumes = [1, 1, 1];
const tempVolumes = [1, 1, 1];


//P5 FUNCTIONS
function preload() {
  // for (let i = 0; i < LEVELS.length; i++) {
  //   songs[i] = loadSound(LEVELS[i].file);
  // }
}

function setup() {
  createCanvas(1280, 720);

  // for (let i = 0; i < LEVELS.length; i++) {
  //   LEVELS[i].length = songs[i].duration();
  // }
}

function draw() {
  if (currentScreen === "menu") {
    drawMenu();
  } else if (currentScreen === "levelSelect") {
    drawLevelSelect();
  } else if (currentScreen === "game") {
    drawGame();
  } else if (currentScreen === "pause") {
    drawGame();
    drawPause();
  } else if (currentScreen === "continue") {
    drawGame();
    drawContinue();
  } else if (currentScreen === "results") {
    drawResults();
  } else if (currentScreen === "options") {
    drawOptions();
  }
  
}

function mousePressed() {
  if (currentScreen === "menu") {
    if (isHovered(780, 214, 500, 84)) {
      currentScreen = "levelSelect";
    } else if (isHovered(780, 314, 500, 84)) {
      previousScreen = currentScreen;
      copyVolumes(volumes, tempVolumes);
      currentScreen = "options";
    } else if (isHovered(780, 414, 500, 84)) {
      currentScreen = "pause";
    } else if (isHovered(780, 514, 500, 84)) {
      currentScreen = "continue";
    }
  }
  
  else if (currentScreen === "levelSelect") {
    if (isHovered(40, 642, 190, 56)) {
      currentScreen = "menu";
    }
    if (isHovered(1050, 642, 190, 56)) {
      currentScreen = "game";
    }
  }

   else if (currentScreen === "pause") {
    previousScreen = "pause";
    if (isHovered(490, 310, 300, 64)) {
      currentScreen = "game";
    } else if (isHovered(490, 392, 300, 64)) {
      previousScreen = currentScreen;
      copyVolumes(volumes, tempVolumes);
      currentScreen = "options";
    } else if (isHovered(490, 474, 300, 64)) {
      currentScreen = "menu";
    }
  }

  else if (currentScreen === "continue") {
    if (isHovered(385, 584, 250, 64) && coins >= 50) {
      coins = coins - 50;
      currentScreen = "game";
    } else if (isHovered(645, 584, 250, 64)) {
      currentScreen = "results";
    }
  }

  else if (currentScreen === "results") {
    if (isHovered(40, 642, 220, 56)) {
      currentScreen = "game";
    } else if (isHovered(530, 642, 220, 56)) {
      currentScreen = "menu";
    } else if (isHovered(1020, 642, 220, 56)) {
      if (chosenLvl < LEVELS.length - 1) {
        chosenLvl = chosenLvl + 1;
      }
      currentScreen = "game";
    }
  }

  else if (currentScreen === "options") {
    if (isHovered(40, 642, 190, 56)) {
      currentScreen = previousScreen;
    } else if (isHovered(1050, 642, 190, 56)) {
      copyVolumes(tempVolumes, volumes);
    }
    for (let i = 0; i < 3; i++) {
      if (isHovered(56, 130 + i * 70, 268, 58)) {
        optionsTab = i;
      }
    }
  }
}

function keyPressed() {
  if (keyCode === ESCAPE) {
    if (currentScreen === "game") {
      currentScreen = "pause";
    } else if (currentScreen === "pause") {
      currentScreen = "game";
    }
  }
}


//HELPERS
function isHovered(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function formatTime(seconds) {
  const minutes = floor(seconds / 60);
  const rest = floor(seconds % 60);
  return `${minutes}:${nf(rest, 2)}`;
}

function getAccuracy() {
  const totalHits = perfectHits + goodHits + missHits;
  if (totalHits === 0) {
    return 0;
  }
  return (perfectHits + goodHits * 0.5) / totalHits * 100;
}

function getRank(accuracy) {
  if (accuracy >= 95) {
    return "S";
  } else if (accuracy >= 90) {
    return "A";
  } else if (accuracy >= 80) {
    return "B";
  } else if (accuracy >= 70) {
    return "C";
  } else {
    return "D";
  }
}

function copyVolumes(from, to) {
  for (let i = 0; i < from.length; i++) {
    to[i] = from[i];
  }
}

//SCREENS
function drawMenu() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 24, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  fill(COLOR_BACKGROUND);
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(140, 100, 520);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(175, 135, 450);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(218, 178, 364);

  //CIRCLE TEXT
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(88);
  text("SOSU", 400, 296);

  fill(COLOR_SUBTEXT);
  textSize(26);
  text("GAME", 400, 404);

  //MENU BUTTONS
  drawMenuButton("START", "Choose a level", 214);
  drawMenuButton("OPTIONS", "Sound and controls", 314);
  drawMenuButton("STORE", "Buy skins", 414);
  drawMenuButton("BUY COINS", "Get extra coins", 514);
}

function drawLevelSelect() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  //NAV TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("CHOOSE A LEVEL", 40, 24);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 20, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  fill(COLOR_BACKGROUND);
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(140, 130, 440);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(170, 160, 380);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(207, 197, 306);

  //CIRCLE TEXT
  const level = LEVELS[chosenLvl];

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(19);
  text(level.name.toUpperCase(), 360, 238);

  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(72);
  text("PLAY", 360, 284);

  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(22);
  text(level.difficulty, 360, 378);

  //DIFFICULTY DOTS
  stroke(COLOR_BORDER);
  strokeWeight(1.5);
  for (let i = 0; i < 5; i++) {
    if (i < level.stars) {
      fill(COLOR_PINK);
    } else {
      fill(COLOR_CARD);
    }
    circle(305 + i * 23, 418, 17);
  }

  //CIRCLE HINT
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("click or press ENTER", 360, 452);

  //LEVEL CARDS
  for (let i = 0; i < LEVELS.length; i++) {
    const cardY = 165 + i * 130;
    drawLevelCard(LEVELS[i], cardY);

    if (isHovered(780, cardY, 500, 110)) {
      chosenLvl = i;
    }
  }

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BACK BUTTON
  fill(COLOR_CARD);
  if (isHovered(40, 642, 190, 56)) {
    stroke(COLOR_PINK);
  } else {
    stroke(COLOR_BORDER);
  }
  strokeWeight(2);
  rect(40, 642, 190, 56, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(20);
  text("< BACK", 135, 670);

  //LEVEL STATS
  const stats = [
    ["HIGHSCORE", level.highscore],
    ["NOTES", level.notes],
    ["LENGTH", formatTime(level.length)]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  for (let i = 0; i < stats.length; i++) {
    const statX = 320 + i * 200;

    textStyle(BOLD);
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], statX, 640);

    fill(COLOR_TEXT);
    textSize(28);
    text(stats[i][1], statX, 660);
  }

  //PLAY BUTTON
  fill(COLOR_CARD);
  if (isHovered(1050, 642, 190, 56)) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(1050, 642, 190, 56, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("PLAY", 1145, 670);
}

function drawGame() {
  background(30);
  fill(255);
  text("game", width / 2, height / 2);
}

function drawPause() {
  //DARK OVERLAY
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 1280, 720);

  //PAUSE CARD
  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  rect(440, 100, 400, 520, 24);

  //PAUSE ICON
  noStroke();
  fill(COLOR_PINK);
  rect(610, 136, 18, 54, 5);
  rect(652, 136, 18, 54, 5);

  //TITLE
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(42);
  text("PAUSE", 640, 206);

  //BUTTONS
  const buttons = ["CONTINUE", "OPTIONS", "QUIT"];
  for (let i = 0; i < buttons.length; i++) {
    const buttonY = 310 + i * 82;

    fill(COLOR_CARD);
    if (isHovered(490, buttonY, 300, 64)) {
      stroke(COLOR_PINK);
    } else {
      stroke(COLOR_BORDER);
    }
    strokeWeight(2);
    rect(490, buttonY, 300, 64, 12);

    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(buttons[i], 640, buttonY + 32);
  }

  //HINT
  textAlign(CENTER, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("press esc to continue", 640, 568);
}

function drawContinue() {
  ellipseMode(CORNER);

  //DARK OVERLAY
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 1280, 720);

  //COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 24, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`Coins: ${coins}`, 1152, 36);

  //CIRCLES
  noFill();
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(460, 90, 360);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(490, 120, 300);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(522, 152, 236);

  //COUNTDOWN
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(86);
  text("10", 640, 216);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(17);
  text("seconds", 640, 322);

  //TITLE
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(38);
  text("OUT OF LIVES!", 640, 474);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(19);
  text("Continue for 50 coins?", 640, 528);

  //YES BUTTON
  fill(COLOR_CARD);
  if (isHovered(385, 584, 250, 64)) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(385, 584, 250, 64, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("YES  •  50 COINS", 510, 616);

  //NO BUTTON
  fill(COLOR_CARD);
  if (isHovered(645, 584, 250, 64)) {
    stroke(COLOR_PINK);
  } else {
    stroke(COLOR_BORDER);
  }
  strokeWeight(2);
  rect(645, 584, 250, 64, 12);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("NO", 770, 616);
}

function drawResults() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  const level = LEVELS[chosenLvl];
  const accuracy = getAccuracy();

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("RESULTS", 40, 24);

  //COINS EARNED
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, 20, 176, 44, 22);

  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(`+${coinsEarned} coins`, 1152, 32);

  //CIRCLES
  noFill();
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(120, 150, 400);

  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(152, 182, 336);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(188, 218, 264);

  //RANK
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(16);
  text("RANK", 320, 248);

  fill(COLOR_YELLOW);
  textSize(140);
  text(getRank(accuracy), 320, 264);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(16);
  text(`${level.name}  •  ${level.difficulty}`, 320, 420);

  //SCORE CARD
  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  rect(600, 110, 640, 124, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(14);
  text("SCORE", 630, 132);

  fill(COLOR_TEXT);
  textSize(50);
  text(score, 630, 154);

  //STATS CARD
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(600, 254, 640, 108, 18);

  const stats = [
    ["ACCURACY", `${round(accuracy)}%`],
    ["HIGHEST COMBO", `x${highestCombo}`],
    ["COINS EARNED", `+${coinsEarned}`]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  for (let i = 0; i < stats.length; i++) {
    const statX = 630 + i * 205;

    textStyle(BOLD);
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], statX, 276);

    fill(COLOR_TEXT);
    textSize(32);
    text(stats[i][1], statX, 298);
  }

  //HIT TILES
  const hits = [
    ["PERFECT", perfectHits, COLOR_PINK],
    ["GOOD", goodHits, COLOR_BORDER],
    ["MISS", missHits, COLOR_CARD]
  ];

  for (let i = 0; i < hits.length; i++) {
    const tileX = 600 + i * 220;

    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(tileX, 382, 200, 208, 18);

    fill(hits[i][2]);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    circle(tileX + 85, 409, 30);

    noStroke();
    textAlign(CENTER, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(40);
    text(hits[i][1], tileX + 100, 458);

    fill(COLOR_SUBTEXT);
    textSize(15);
    text(hits[i][0], tileX + 100, 516);
  }

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BUTTONS
  const buttons = [
    ["RETRY", 40],
    ["MENU", 530],
    ["NEXT LEVEL", 1020]
  ];

  for (let i = 0; i < buttons.length; i++) {
    const buttonX = buttons[i][1];

    fill(COLOR_CARD);
    if (isHovered(buttonX, 642, 220, 56)) {
      stroke(COLOR_PINK);
      strokeWeight(4);
    } else {
      stroke(COLOR_BORDER);
      strokeWeight(2);
    }
    rect(buttonX, 642, 220, 56, 12);

    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(buttons[i][0], buttonX + 110, 670);
  }
}

function drawOptions() {
  background(COLOR_BACKGROUND);
  ellipseMode(CORNER);

  //NAV
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text("OPTIONS", 40, 28);

  //OPTIONS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(40, 110, 300, 480, 18);

  const option = ["SOUND", "CONTROLS", "HOW TO PLAY"];

  for(let i = 0; i < option.length; i++){
    const statY = 130 + i * 70;

    
   if (i === optionsTab || isHovered(56, statY, 268, 58)) {
      noFill();
      stroke(COLOR_BORDER);
      strokeWeight(4);
      rect(56, statY, 268, 58, 12);
    }
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(18);
    text(option[i], 82, statY + 20);
  }

  //SELECTED TAB
  const tabs = [drawSoundTab, drawControlsTab, drawHowToPlayTab];
  tabs[optionsTab]();

  //BOTTOM BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);

  //BUTTONS
  fill(COLOR_CARD);
  if(isHovered(40, 642, 190, 56, 12)){
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
  strokeWeight(2);
  }
  rect(40, 642, 190, 56, 12)

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("< BACK", 95, 660);

  fill(COLOR_CARD);
  if(isHovered(1050, 642, 190, 56, 12)){
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
  strokeWeight(2);
  }
  rect(1050, 642, 190, 56, 12)

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(20);
  text("SAVE", 1118, 660);
  
}


//COMPONENTS
function drawMenuButton(title, subtitle, y) {
  const hovered = isHovered(780, y, 500, 84);

  push();
  if (hovered) {
    translate(1280, y + 42);
    scale(1.2);
    translate(-1280, -(y + 42));
  }

  //BUTTON
  fill(COLOR_CARD);
  if (hovered) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(780, y, 560, 84, 18);

  //ICON
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, y + 25, 34);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(title, 876, y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(subtitle, 876, y + 50);

  pop();
}

function drawLevelCard(level, y) {
  const hovered = isHovered(780, y, 500, 110);

  push();
  if (hovered) {
    translate(1280, y + 55);
    scale(1.2);
    translate(-1280, -(y + 55));
  }

  //CARD
  fill(COLOR_CARD);
  if (hovered) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(780, y, 560, 110, 18);

  //THUMBNAIL
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(796, y + 16, 78, 78, 12);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(level.name, 898, y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(level.song, 898, y + 46);

  //DIFFICULTY DOTS
  stroke(COLOR_BORDER);
  strokeWeight(1.5);
  for (let i = 0; i < 5; i++) {
    if (i < level.stars) {
      fill(COLOR_PINK);
    } else {
      fill(COLOR_CARD);
    }
    circle(898 + i * 19, y + 76, 13);
  }

  //HIGHSCORE
  noStroke();
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  if (level.highscore > 0) {
    text("highscore: " + level.highscore, 1010, y + 76);
  }

  pop();
}

function drawSoundTab() {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("SOUND", 404, 136);

    //SLIDERS
  for (let i = 0; i < volumes.length; i++) {
    const sliderY = 196 + i * 64;

    //DRAGGING
    if (mouseIsPressed && isHovered(545, sliderY - 5, 570, 36)) {
      tempVolumes[i] = constrain((mouseX - 560) / 540, 0, 1);
    }

    //LABEL
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    fill(COLOR_TEXT);
    textSize(18);
    text(VOLUME_LABELS[i], 404, sliderY);

    //TRACK
    fill(COLOR_PANEL);
    rect(560, sliderY + 8, 540, 10, 5);

    //FILLED PART
    fill(COLOR_PINK);
    rect(560, sliderY + 8, 540 * tempVolumes[i], 10, 5);

    //KNOB
    fill(COLOR_CARD);
    stroke(COLOR_PINK);
    strokeWeight(3);
    circle(560 + 540 * tempVolumes[i] - 15, sliderY - 2, 30);

    //PERCENTAGE
    noStroke();
    textStyle(BOLD);
    fill(COLOR_TEXT);
    text(`${round(tempVolumes[i] * 100)}%`, 1130, sliderY);
  }
}

function drawControlsTab() {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("CONTROLS", 404, 136);

  //CLICK WITH 
  textSize(18);
  textStyle(NORMAL);
  text("Click with", 404, 198);

  //BUTTONS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(560, 184, 180, 54, 27);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(18);
  text("Mouse", 622, 202);

  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(760, 184, 180, 54, 27);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_TEXT);
  textSize(18);
  text("Keys Z/X", 815, 202);

  //LINE
  fill(COLOR_BORDER);
  noStroke();
  rect(404, 272, 802, 2, 27);

  //KEYS
  const keysOption = [
    ["Mouse/Z/X", "Hit a circle"],
    ["ESC", "Pause the game"],
    ["ENTER", "Start a level"]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("KEYS", 404, 300);

  for(let i = 0; i < keysOption.length; i++){
    const statY = 346 + i * 55;

    //BUTTONS
    fill(COLOR_CARD)
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(404, statY, 180, 44, 10)

    //KEY TEXT
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(16);
    text(keysOption[i][0], 494, statY + 22);
    
    //ACTION TEXT
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(18);
    text(keysOption[i][1], 610, statY + 12);
  }
}

function drawHowToPlayTab() {
  ellipseMode(CORNER);

  //PANEL
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  //TITLE
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("HOW TO PLAY", 404, 136);

  //STEPS
  const steps = [
    ["Click the circle when the ring hits it", "Perfect timing gives the most points"],
    ["Hold the mouse and follow the slider", "Let go too early and it counts as a miss"],
    ["Don't miss too often", "Every miss costs a piece of your life bar"]
  ];

  for (let i = 0; i < steps.length; i++) {
    const stepY = 186 + i * 106;

    //STEP CARD
    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(404, stepY, 802, 92, 14);

    //ICON BOX
    fill(COLOR_PANEL);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(420, stepY + 12, 68, 68, 10);

    //ICON
    if (i === 0) {
      noFill();
      stroke(COLOR_BLUE);
      strokeWeight(2);
      circle(430, stepY + 22, 48);

      fill(COLOR_CARD);
      stroke(COLOR_PINK);
      strokeWeight(3);
      circle(439, stepY + 31, 30);
    } else if (i === 1) {
      fill(COLOR_CARD);
      stroke(COLOR_BORDER);
      strokeWeight(2);
      rect(428, stepY + 34, 52, 24, 12);

      fill(COLOR_CARD);
      stroke(COLOR_PINK);
      strokeWeight(3);
      circle(428, stepY + 34, 24);
    } else {
      fill(COLOR_CARD);
      stroke(COLOR_BORDER);
      strokeWeight(2);
      rect(430, stepY + 39, 48, 14, 7);

      noStroke();
      fill(COLOR_PINK);
      rect(430, stepY + 39, 18, 14, 7);
    }

    //STEP TEXT
    noStroke();
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text(`${i + 1}.`, 512, stepY + 20);

    textSize(18);
    text(steps[i][0], 545, stepY + 20);

    textStyle(NORMAL);
    fill(COLOR_SUBTEXT);
    textSize(14);
    text(steps[i][1], 512, stepY + 54);
  }

  //POINTS
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Perfect = 300  •  Good = 100  •  Miss = 0  •  Higher combo = more points", 404, 520);
}