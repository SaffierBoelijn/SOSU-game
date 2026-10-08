// ===== COLORS =====
const COLOR_BACKGROUND = "#1E1B2E";
const COLOR_CARD = "#2B2640";
const COLOR_PANEL = "#3A3452";
const COLOR_BORDER = "#5A5280";
const COLOR_PINK = "#FF66AA";
const COLOR_BLUE = "#66CCFF";
const COLOR_YELLOW = "#FFD166";
const COLOR_TEXT = "#FFFFFF";
const COLOR_SUBTEXT = "#A9A3C4";


// ===== GAME RULES =====
const HIT_FRAME = 83;
const PERFECT_WINDOW = 6;
const GOOD_WINDOW = 14;
const TOO_EARLY = 24;
const LIVES_PER_LEVEL = [5, 5, 10];
const CONTINUE_TIME = 600;
const CONTINUE_COST = 50;


// ===== BUTTONS =====
const MENU_START = { x: 780, y: 214, w: 500, h: 84 };
const MENU_OPTIONS = { x: 780, y: 314, w: 500, h: 84 };
const MENU_STORE = { x: 780, y: 414, w: 500, h: 84 };
const MENU_COINS = { x: 780, y: 514, w: 500, h: 84 };

const BACK_BUTTON = { x: 40, y: 642, w: 190, h: 56 };
const PLAY_BUTTON = { x: 1050, y: 642, w: 190, h: 56 };
const SAVE_BUTTON = { x: 1050, y: 642, w: 190, h: 56 };

const PAUSE_BUTTON = { x: 580, y: 22, w: 120, h: 38 };
const PAUSE_CONTINUE = { x: 490, y: 310, w: 300, h: 64 };
const PAUSE_OPTIONS = { x: 490, y: 392, w: 300, h: 64 };
const PAUSE_QUIT = { x: 490, y: 474, w: 300, h: 64 };

const CONTINUE_YES = { x: 385, y: 584, w: 250, h: 64 };
const CONTINUE_NO = { x: 645, y: 584, w: 250, h: 64 };

const RESULTS_RETRY = { x: 40, y: 642, w: 220, h: 56 };
const RESULTS_MENU = { x: 530, y: 642, w: 220, h: 56 };
const RESULTS_NEXT = { x: 1020, y: 642, w: 220, h: 56 };


// ===== VARIABLES =====
let currentScreen = "menu";
let previousScreen = "menu";
let coins = 0;
let chosenLvl = 0;
let songs = [];
let songStartTime = 0;
let menuMusic;
let hitSound;
let hoverSound;
let hoveredItem = "";
let lastHoveredItem = "";
let menuMusicOn = false;

let balls = [];
let hitEffects = [];
let gameFrame = 0;
let score = 0;
let combo = 0;
let highestCombo = 0;
let perfectHits = 0;
let goodHits = 0;
let missHits = 0;
let coinsEarned = 0;
let maxLives = 5;
let lives = 5;
let continueTimer = CONTINUE_TIME;

let optionsTab = 0;
let draggingSlider = -1;
const VOLUME_LABELS = ["Master", "Menu music", "Songs", "Effects"];
const volumes = [1, 1, 1, 1];
const tempVolumes = [1, 1, 1, 1];


// ===== P5 FUNCTIONS =====
function preload() {
  for (let i = 0; i < LEVELS.length; i++) {
    songs[i] = loadSound(LEVELS[i].file);
  }
  menuMusic = loadSound("sounds/menu.wav");
  hitSound = loadSound("sounds/hit.mp3");
  hoverSound = loadSound("sounds/hover.wav");
}

function setup() {
  createCanvas(1280, 720);
  ellipseMode(CORNER);

  for (let i = 0; i < LEVELS.length; i++) {
    LEVELS[i].length = songs[i].duration();
  }

  if (getItem("coins") !== null) {
    coins = getItem("coins");
  }

  for (let i = 0; i < LEVELS.length; i++) {
    if (getItem("highscore" + i) !== null) {
      LEVELS[i].highscore = getItem("highscore" + i);
    }
  }
}

function draw() {
  updateMenuMusic();
  hoveredItem = "";

  if (currentScreen === "menu") {
    drawMenu();
  } else if (currentScreen === "levelSelect") {
    drawLevelSelect();
  } else if (currentScreen === "game") {
    updateGame();
    drawGame();
  } else if (currentScreen === "pause") {
    drawGame();
    drawPause();
  } else if (currentScreen === "continue") {
    updateContinue();
    drawGame();
    drawContinue();
  } else if (currentScreen === "results") {
    drawResults();
  } else if (currentScreen === "options") {
    drawOptions();
  }

  //HOVER SOUND (only once when you move onto something new)
  if (hoveredItem !== "" && hoveredItem !== lastHoveredItem) {
    hoverSound.play(0, 1, volumes[0] * volumes[3]);
  }
  lastHoveredItem = hoveredItem;
}

function mousePressed() {
  userStartAudio();

  if (currentScreen === "menu") {
    clickMenu();
  } else if (currentScreen === "levelSelect") {
    clickLevelSelect();
  } else if (currentScreen === "game") {
    clickGame();
  } else if (currentScreen === "pause") {
    clickPause();
  } else if (currentScreen === "continue") {
    clickContinue();
  } else if (currentScreen === "results") {
    clickResults();
  } else if (currentScreen === "options") {
    clickOptions();
  }
}

function keyPressed() {
  userStartAudio();

  if (keyCode === ESCAPE && currentScreen === "game") {
    pauseGame();
  } else if (keyCode === ESCAPE && currentScreen === "pause") {
    resumeGame();
  } else if (keyCode === ENTER && currentScreen === "levelSelect") {
    startGame();
  } else if ((key === "z" || key === "x") && currentScreen === "game") {
    tryHit();
  }
}

function mouseMoved() {
  if (currentScreen === "levelSelect") {
    for (let i = 0; i < LEVELS.length; i++) {
      if (isHovered(780, 165 + i * 130, 500, 110)) {
        chosenLvl = i;
      }
    }
  }
}

function mouseDragged() {
  if (draggingSlider !== -1) {
    tempVolumes[draggingSlider] = constrain((mouseX - 560) / 540, 0, 1);
  }
}

function mouseReleased() {
  draggingSlider = -1;
}


// ===== CLICKS PER SCREEN =====
function clickMenu() {
  if (isOver(MENU_START)) {
    currentScreen = "levelSelect";
  } else if (isOver(MENU_OPTIONS)) {
    openOptions();
  }
}

function clickLevelSelect() {
  if (isOver(BACK_BUTTON)) {
    currentScreen = "menu";
  } else if (isOver(PLAY_BUTTON)) {
    startGame();
  } else if (dist(mouseX, mouseY, 360, 350) < 153) {
    startGame();
  }
}

function clickGame() {
  if (isOver(PAUSE_BUTTON)) {
    pauseGame();
  } else {
    tryHit();
  }
}

function clickPause() {
  if (isOver(PAUSE_CONTINUE)) {
    resumeGame();
  } else if (isOver(PAUSE_OPTIONS)) {
    openOptions();
  } else if (isOver(PAUSE_QUIT)) {
    stopSong();
    currentScreen = "menu";
  }
}

function clickContinue() {
  if (isOver(CONTINUE_YES) && coins >= CONTINUE_COST) {
    coins = coins - CONTINUE_COST;
    saveProgress();
    lives = maxLives;
    resumeGame();
  } else if (isOver(CONTINUE_NO)) {
    stopSong();
    currentScreen = "results";
  }
}

function clickResults() {
  if (isOver(RESULTS_RETRY)) {
    startGame();
  } else if (isOver(RESULTS_MENU)) {
    currentScreen = "menu";
  } else if (isOver(RESULTS_NEXT) && chosenLvl < LEVELS.length - 1) {
    chosenLvl = chosenLvl + 1;
    startGame();
  }
}

function clickOptions() {
  if (isOver(BACK_BUTTON)) {
    currentScreen = previousScreen;
  } else if (isOver(SAVE_BUTTON)) {
    for (let i = 0; i < volumes.length; i++) {
      volumes[i] = tempVolumes[i];
    }
    menuMusic.setVolume(volumes[0] * volumes[1]);
  }

  //TABS
  for (let i = 0; i < 3; i++) {
    if (isHovered(56, 130 + i * 70, 268, 58)) {
      optionsTab = i;
    }
  }

  //SLIDERS
  if (optionsTab === 0) {
    for (let i = 0; i < volumes.length; i++) {
      if (isHovered(545, 191 + i * 64, 570, 36)) {
        draggingSlider = i;
        tempVolumes[i] = constrain((mouseX - 560) / 540, 0, 1);
      }
    }
  }
}

function openOptions() {
  previousScreen = currentScreen;
  for (let i = 0; i < volumes.length; i++) {
    tempVolumes[i] = volumes[i];
  }
  currentScreen = "options";
}


// ===== GAME =====
function startGame() {
  balls = [];
  const levelBalls = LEVELS[chosenLvl].balls;

  for (let i = 0; i < levelBalls.length; i++) {
    balls.push({
      x: levelBalls[i].x,
      y: levelBalls[i].y,
      start: levelBalls[i].start,
      number: i + 1,
      visible: true
    });
  }

  gameFrame = 0;
  score = 0;
  combo = 0;
  highestCombo = 0;
  perfectHits = 0;
  goodHits = 0;
  missHits = 0;
  coinsEarned = 0;
  hitEffects = [];
  maxLives = LIVES_PER_LEVEL[chosenLvl];
  lives = maxLives;

  playSong();
  currentScreen = "game";
}

function updateGame() {
  gameFrame = (getAudioContext().currentTime - songStartTime) * 60;

  for (let i = 0; i < balls.length; i++) {
    if (balls[i].visible && gameFrame > balls[i].start + HIT_FRAME + GOOD_WINDOW) {
      balls[i].visible = false;
      missHits = missHits + 1;
      loseLife();
    }
  }

  if (lives <= 0) {
    goToContinue();
    return;
  }

  let allDone = true;
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].visible) {
      allDone = false;
    }
  }
  if (allDone) {
    finishLevel();
  }
}

function tryHit() {
  let ball = null;
  for (let i = 0; i < balls.length; i++) {
    const b = balls[i];
    if (b.visible && gameFrame >= b.start && dist(mouseX, mouseY, b.x, b.y) < 55) {
      ball = b;
      break;
    }
  }

  if (ball === null) {
    loseLife();
    addHitEffect(mouseX, mouseY, COLOR_BORDER);
    if (lives <= 0) {
      goToContinue();
    }
    return;
  }

  const diff = abs(gameFrame - (ball.start + HIT_FRAME));

  if (gameFrame < ball.start + HIT_FRAME - TOO_EARLY) {
    return;
  }

  if (diff <= PERFECT_WINDOW) {
    perfectHits = perfectHits + 1;
    score = score + 300;
    combo = combo + 1;
    lives = min(maxLives, lives + 0.5);
    addHitEffect(ball.x, ball.y, COLOR_PINK);
    hitSound.play(0, 1, volumes[0] * volumes[3]);
  } else if (diff <= GOOD_WINDOW) {
    goodHits = goodHits + 1;
    score = score + 100;
    combo = combo + 1;
    addHitEffect(ball.x, ball.y, COLOR_BLUE);
    hitSound.play(0, 1, volumes[0] * volumes[3]);
  } else {
    missHits = missHits + 1;
    loseLife();
  }

  highestCombo = max(highestCombo, combo);
  ball.visible = false;

  if (lives <= 0) {
    goToContinue();
  }
}

function loseLife() {
  lives = lives - 1;
  combo = 0;
}

function addHitEffect(x, y, effectColor) {
  hitEffects.push({ x: x, y: y, frame: gameFrame, color: effectColor });
}

function finishLevel() {
  coinsEarned = floor(score / 1000);
  coins = coins + coinsEarned;

  if (score > LEVELS[chosenLvl].highscore) {
    LEVELS[chosenLvl].highscore = score;
  }

  saveProgress();
  stopSong();
  currentScreen = "results";
}

function pauseGame() {
  pauseSong();
  currentScreen = "pause";
}

function resumeGame() {
  resumeSong();
  currentScreen = "game";
}

function goToContinue() {
  pauseSong();
  continueTimer = CONTINUE_TIME;
  currentScreen = "continue";
}

function updateContinue() {
  continueTimer = continueTimer - 1;

  if (continueTimer <= 0) {
    stopSong();
    currentScreen = "results";
  }
}


// ===== MUSIC =====
function playSong() {
  stopSong();
  songStartTime = getAudioContext().currentTime;
  songs[chosenLvl].play(0, 1, volumes[0] * volumes[2], 0);
}

function stopSong() {
  for (let i = 0; i < songs.length; i++) {
    songs[i].stop();
  }
}

function pauseSong() {
  songs[chosenLvl].stop();
}

function resumeSong() {
  const seconds = gameFrame / 60;
  songStartTime = getAudioContext().currentTime - seconds;
  songs[chosenLvl].play(0, 1, volumes[0] * volumes[2], seconds);
}

function updateMenuMusic() {
  //no menu music while a level is running (also not in options from the pause menu)
  let inLevel = currentScreen === "game" || currentScreen === "pause" || currentScreen === "continue";
  if (currentScreen === "options" && previousScreen === "pause") {
    inLevel = true;
  }

  if (!inLevel && !menuMusicOn) {
    menuMusic.loop(0, 1, volumes[0] * volumes[1]);
    menuMusicOn = true;
  } else if (inLevel && menuMusicOn) {
    menuMusic.stop();
    menuMusicOn = false;
  }
}


// ===== SCREENS =====
function drawMenu() {
  background(COLOR_BACKGROUND);
  drawCoins("Coins: " + coins, 24);

  //CIRCLES
  noFill();
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
  drawMenuButton("START", "Choose a level", MENU_START);
  drawMenuButton("OPTIONS", "Sound and controls", MENU_OPTIONS);
  drawMenuButton("STORE", "Coming soon", MENU_STORE);
  drawMenuButton("BUY COINS", "Coming soon", MENU_COINS);
}

function drawLevelSelect() {
  const level = LEVELS[chosenLvl];

  background(COLOR_BACKGROUND);
  drawTopBar("CHOOSE A LEVEL");
  drawCoins("Coins: " + coins, 20);

  //CIRCLES
  noFill();
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
  noStroke();
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(19);
  text(level.name.toUpperCase(), 360, 238);

  fill(COLOR_TEXT);
  textSize(72);
  text("PLAY", 360, 284);

  textStyle(NORMAL);
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

  noStroke();
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("click or press ENTER", 360, 452);

  //LEVEL CARDS
  for (let i = 0; i < LEVELS.length; i++) {
    drawLevelCard(LEVELS[i], 165 + i * 130, i === chosenLvl);
  }

  //BOTTOM BAR
  drawBottomBar();
  drawButton("< BACK", BACK_BUTTON, true);
  drawButton("PLAY", PLAY_BUTTON, true);

  //LEVEL STATS
  const stats = [
    ["HIGHSCORE", level.highscore],
    ["NOTES", level.balls.length],
    ["LENGTH", formatTime(level.length)]
  ];

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  for (let i = 0; i < stats.length; i++) {
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], 320 + i * 200, 640);

    fill(COLOR_TEXT);
    textSize(28);
    text(stats[i][1], 320 + i * 200, 660);
  }
}

function drawGame() {
  background(COLOR_BACKGROUND);

  //HUD BAR
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  //SCORE
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_SUBTEXT);
  textSize(13);
  text("SCORE", 40, 12);

  fill(COLOR_TEXT);
  textSize(32);
  text(score, 40, 30);

  //PAUSE BUTTON
  drawButton("II  PAUSE", PAUSE_BUTTON, true);

  //LIVES
  noStroke();
  textAlign(LEFT, TOP);
  fill(COLOR_SUBTEXT);
  textSize(13);
  text("LIVES", 960, 14);

  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(960, 38, 280, 18, 9);

  noStroke();
  fill(COLOR_PINK);
  rect(960, 38, max(0, 280 * (lives / maxLives)), 18, 9);

  //COMBO
  fill(COLOR_TEXT);
  textSize(52);
  text("x" + combo, 40, 630);

  fill(COLOR_SUBTEXT);
  textSize(15);
  text("COMBO", 144, 660);

  //ACCURACY
  textAlign(RIGHT, TOP);
  fill(COLOR_TEXT);
  textSize(34);
  text(round(getAccuracy()) + "%", 1240, 640);

  ellipseMode(CENTER);

  //BALLS
  for (let i = balls.length - 1; i >= 0; i--) {
    if (balls[i].visible && gameFrame >= balls[i].start) {
      drawBall(balls[i]);
    }
  }

  //HIT EFFECTS
  for (let i = 0; i < hitEffects.length; i++) {
    const effect = hitEffects[i];
    const age = gameFrame - effect.frame;

    if (age <= 20) {
      noFill();
      stroke(effect.color);
      strokeWeight(3);
      circle(effect.x, effect.y, 110 + age * 4);
    }
  }

  ellipseMode(CORNER);
}

function drawBall(ball) {
  const ringSize = map(gameFrame - ball.start, 0, HIT_FRAME, 200, 110, true);

  //BALL
  fill(COLOR_CARD);
  stroke(COLOR_PINK);
  strokeWeight(4);
  circle(ball.x, ball.y, 110);

  //NUMBER
  noStroke();
  fill(COLOR_TEXT);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(32);
  text(ball.number, ball.x, ball.y);

  //RING
  noFill();
  stroke(COLOR_BLUE);
  strokeWeight(2);
  circle(ball.x, ball.y, ringSize);
}

function drawPause() {
  drawDarkOverlay();

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
  drawButton("CONTINUE", PAUSE_CONTINUE, true);
  drawButton("OPTIONS", PAUSE_OPTIONS, true);
  drawButton("QUIT", PAUSE_QUIT, true);

  //HINT
  textAlign(CENTER, TOP);
  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text("press esc to continue", 640, 568);
}

function drawContinue() {
  drawDarkOverlay();
  drawCoins("Coins: " + coins, 24);

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
  text(ceil(continueTimer / 60), 640, 216);

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
  text("Continue for " + CONTINUE_COST + " coins?", 640, 528);

  //BUTTONS
  drawButton("YES  •  " + CONTINUE_COST + " COINS", CONTINUE_YES, coins >= CONTINUE_COST);
  drawButton("NO", CONTINUE_NO, true);
}

function drawResults() {
  const level = LEVELS[chosenLvl];
  const accuracy = getAccuracy();

  background(COLOR_BACKGROUND);
  drawTopBar("RESULTS");
  drawCoins("+" + coinsEarned + " coins", 20);

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
  text(level.name + "  •  " + level.difficulty, 320, 420);

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
    ["ACCURACY", round(accuracy) + "%"],
    ["HIGHEST COMBO", "x" + highestCombo],
    ["COINS EARNED", "+" + coinsEarned]
  ];

  noStroke();
  for (let i = 0; i < stats.length; i++) {
    fill(COLOR_SUBTEXT);
    textSize(13);
    text(stats[i][0], 630 + i * 205, 276);

    fill(COLOR_TEXT);
    textSize(32);
    text(stats[i][1], 630 + i * 205, 298);
  }

  //HIT TILES
  const hits = [
    ["PERFECT", perfectHits, COLOR_PINK],
    ["GOOD", goodHits, COLOR_BLUE],
    ["MISS", missHits, COLOR_CARD]
  ];

  for (let i = 0; i < hits.length; i++) {
    const tileX = 600 + i * 220;

    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(tileX, 382, 200, 208, 18);

    fill(hits[i][2]);
    circle(tileX + 85, 409, 30);

    noStroke();
    textAlign(CENTER, TOP);
    fill(COLOR_TEXT);
    textSize(40);
    text(hits[i][1], tileX + 100, 458);

    fill(COLOR_SUBTEXT);
    textSize(15);
    text(hits[i][0], tileX + 100, 516);
  }

  //BOTTOM BAR
  drawBottomBar();
  drawButton("RETRY", RESULTS_RETRY, true);
  drawButton("MENU", RESULTS_MENU, true);
  drawButton("NEXT LEVEL", RESULTS_NEXT, chosenLvl < LEVELS.length - 1);
}

function drawOptions() {
  background(COLOR_BACKGROUND);
  drawTopBar("OPTIONS");

  //TAB LIST
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(40, 110, 300, 480, 18);

  const tabNames = ["SOUND", "CONTROLS", "HOW TO PLAY"];

  for (let i = 0; i < tabNames.length; i++) {
    const tabY = 130 + i * 70;

    //SELECTED TAB = pink, HOVERED TAB = purple
    noFill();
    strokeWeight(4);
    if (i === optionsTab) {
      stroke(COLOR_PINK);
      rect(56, tabY, 268, 58, 12);
    } else if (isHovered(56, tabY, 268, 58)) {
      hoveredItem = tabNames[i];
      stroke(COLOR_BORDER);
      rect(56, tabY, 268, 58, 12);
    }

    noStroke();
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(18);
    text(tabNames[i], 82, tabY + 20);
  }

  //SELECTED TAB
  if (optionsTab === 0) {
    drawSoundTab();
  } else if (optionsTab === 1) {
    drawControlsTab();
  } else {
    drawHowToPlayTab();
  }

  //BOTTOM BAR
  drawBottomBar();
  drawButton("< BACK", BACK_BUTTON, true);
  drawButton("SAVE", SAVE_BUTTON, true);
}

function drawSoundTab() {
  drawTabPanel("SOUND");

  for (let i = 0; i < volumes.length; i++) {
    const sliderY = 196 + i * 64;
    const knobX = 560 + 540 * tempVolumes[i];

    //LABEL
    noStroke();
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
    circle(knobX - 15, sliderY - 2, 30);

    //PERCENTAGE
    noStroke();
    textStyle(BOLD);
    fill(COLOR_TEXT);
    text(round(tempVolumes[i] * 100) + "%", 1130, sliderY);
  }
}

function drawControlsTab() {
  drawTabPanel("CONTROLS");

  const keys = [
    ["Mouse / Z / X", "Hit the circle under your mouse"],
    ["ESC", "Pause the game"],
    ["ENTER", "Start a level"]
  ];

  for (let i = 0; i < keys.length; i++) {
    const keyY = 190 + i * 60;

    //KEY BOX
    fill(COLOR_CARD);
    stroke(COLOR_BORDER);
    strokeWeight(2);
    rect(404, keyY, 180, 44, 10);

    //KEY TEXT
    noStroke();
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(16);
    text(keys[i][0], 494, keyY + 22);

    //ACTION TEXT
    textAlign(LEFT, TOP);
    textStyle(NORMAL);
    textSize(18);
    text(keys[i][1], 610, keyY + 12);
  }
}

function drawHowToPlayTab() {
  drawTabPanel("HOW TO PLAY");

  const steps = [
    ["Click the circle when the ring hits it", "Perfect timing gives the most points"],
    ["Aim with the mouse, click or press Z/X", "Both work, use whatever you like"],
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
    textStyle(BOLD);
    fill(COLOR_TEXT);
    textSize(20);
    text((i + 1) + ".", 512, stepY + 20);

    textSize(18);
    text(steps[i][0], 545, stepY + 20);

    textStyle(NORMAL);
    fill(COLOR_SUBTEXT);
    textSize(14);
    text(steps[i][1], 512, stepY + 54);
  }

  textSize(15);
  text("Perfect = 300  •  Good = 100  •  Miss = 0  •  Perfect gives back a bit of life", 404, 520);
}


// ===== REUSABLE PARTS =====
function drawButton(label, button, enabled) {
  //BORDER
  fill(COLOR_CARD);
  if (enabled && isOver(button)) {
    hoveredItem = label;
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(button.x, button.y, button.w, button.h, 12);

  //TEXT
  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  textSize(20);
  if (enabled) {
    fill(COLOR_TEXT);
  } else {
    fill(COLOR_SUBTEXT);
  }
  text(label, button.x + button.w / 2, button.y + button.h / 2);
}

function drawMenuButton(title, subtitle, button) {
  let x = button.x;
  if (isOver(button)) {
    hoveredItem = title;
    x = button.x - 20;
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }

  //BUTTON
  fill(COLOR_CARD);
  rect(x, button.y, button.w + 60, button.h, 18);

  //ICON
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  circle(x + 35, button.y + 25, 34);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(title, x + 96, button.y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(subtitle, x + 96, button.y + 50);
}

function drawLevelCard(level, y, selected) {
  let x = 780;
  if (isHovered(780, y, 500, 110)) {
    hoveredItem = level.name;
    x = 760;
  }

  //CARD
  fill(COLOR_CARD);
  if (selected) {
    stroke(COLOR_PINK);
    strokeWeight(4);
  } else {
    stroke(COLOR_BORDER);
    strokeWeight(2);
  }
  rect(x, y, 560, 110, 18);

  //THUMBNAIL
  fill(COLOR_PANEL);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(x + 16, y + 16, 78, 78, 12);

  //TEXT
  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(level.name, x + 118, y + 16);

  textStyle(NORMAL);
  fill(COLOR_SUBTEXT);
  textSize(15);
  text(level.song, x + 118, y + 46);

  //DIFFICULTY DOTS
  stroke(COLOR_BORDER);
  strokeWeight(1.5);
  for (let i = 0; i < 5; i++) {
    if (i < level.stars) {
      fill(COLOR_PINK);
    } else {
      fill(COLOR_CARD);
    }
    circle(x + 118 + i * 19, y + 76, 13);
  }

  //HIGHSCORE
  if (level.highscore > 0) {
    noStroke();
    fill(COLOR_SUBTEXT);
    text("highscore: " + level.highscore, x + 230, y + 76);
  }
}

function drawTopBar(title) {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 0, 1280, 80);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(30);
  text(title, 40, 24);
}

function drawBottomBar() {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(0, 620, 1280, 100);
}

function drawTabPanel(title) {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(370, 110, 870, 480, 18);

  noStroke();
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(22);
  text(title, 404, 136);
}

function drawDarkOverlay() {
  noStroke();
  fill(0, 0, 0, 150);
  rect(0, 0, 1280, 720);
}

function drawCoins(label, y) {
  fill(COLOR_CARD);
  stroke(COLOR_BORDER);
  strokeWeight(2);
  rect(1064, y, 176, 44, 22);

  noStroke();
  textAlign(CENTER, CENTER);
  textStyle(BOLD);
  fill(COLOR_TEXT);
  textSize(17);
  text(label, 1152, y + 22);
}


// ===== HELPERS =====
function isHovered(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

function isOver(button) {
  return isHovered(button.x, button.y, button.w, button.h);
}

function formatTime(seconds) {
  const minutes = floor(seconds / 60);
  const rest = floor(seconds % 60);
  return minutes + ":" + nf(rest, 2);
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

function saveProgress() {
  storeItem("coins", coins);

  for (let i = 0; i < LEVELS.length; i++) {
    storeItem("highscore" + i, LEVELS[i].highscore);
  }
}