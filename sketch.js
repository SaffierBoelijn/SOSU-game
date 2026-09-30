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
    if (isHovered(490, 310, 300, 64)) {
      currentScreen = "game";
    } else if (isHovered(490, 392, 300, 64)) {
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
  background(30);
  fill(255);
  text("results", width / 2, height / 2);
}

function drawOptions() {
  background(30);
  fill(255);
  text("options", width / 2, height / 2);
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