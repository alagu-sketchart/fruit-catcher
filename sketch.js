var database;
var background_i;
var gameState = 0;
var playerCount = 0;
var allPlayers;
var score = 0;
var player, form, game;
var player1, player2;
var players;
var fruits;
var apple, banana, watermelon, orange, pinapple;
var fruitGroup;
var basket;
var player1score = 0;
var player2score = 0;


function preload(){
  background_i = loadImage("images/jungle.jpg");
  basket = loadImage("images/basket.png");
  apple = loadImage("images/apple.png");
  banana = loadImage("images/banana.png");
  watermelon = loadImage("images/melon.png");
  orange = loadImage("images/orange.png");
  pinapple = loadImage("images/pineapple.png");
  fruitGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(background_i);
  if (gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end();
  }
  if (playerCount === 2){
    game.update(1);
  }
   /*if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }*/
}
