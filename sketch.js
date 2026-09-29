let currentScreen = "menu";

function setup() {
  createCanvas(1280, 720);
}

//colors
const COLOR_BACKGROUND = "#1E1B2E"; // achtergrond
const COLOR_CARD = "#2B2640";       // kaarten en balken
const COLOR_PANEL = "#3A3452";      // lichtere vlakken
const COLOR_BORDER = "#5A5280";     // randen
const COLOR_PINK = "#FF66AA";       // knoppen en selectie
const COLOR_BLUE = "#66CCFF";       // krimpende ringen
const COLOR_YELLOW = "#FFD166";     // rang
const COLOR_TEXT = "#FFFFFF";       // tekst
const COLOR_SUBTEXT = "#A9A3C4";    // grijze tekst

//variables
let coins = 0;

//screen switching
function draw() {
  if (currentScreen === "menu") {
    drawMenu();
  } else if (currentScreen === "levelSelect") {
    drawLevelSelect();
  } else if (currentScreen === "game") {
    drawGame();
  } else if (currentScreen === "pause") {
    drawPause();
  } else if (currentScreen === "results") {
    drawResults();
  }
}

//all screens
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

  //START
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(780, 214, 560, 84, 18);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, 239, 34);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("START", 876, 230);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Choose a level", 876, 264);

  //OPTIONS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(780, 314, 560, 84, 18);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, 339, 34);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("OPTIONS", 876, 330);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Sound and controls", 876, 364);

  //STORE
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(780, 414, 560, 84, 18);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, 439, 34);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("STORE", 876, 430);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Buy skins", 876, 464);

  //BUY COINS
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(780, 514, 560, 84, 18);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(815, 539, 34);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text("BUY COINS", 876, 530);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("Get extra coins", 876, 564);
}

function drawLevelSelect() {
  background(30);
  fill(255);
  text("Levelkeuze", width / 2, height / 2);
}

function drawGame() {
  background(30);
  fill(255);
  text("game", width / 2, height / 2);
}

function drawPause() {
  background(30);
  fill(255);
  text("pause", width / 2, height / 2);
}

function drawResults() {
  background(30);
  fill(255);
  text("results", width / 2, height / 2);
}

//idk
