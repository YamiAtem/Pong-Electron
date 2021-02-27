/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

const W = window.innerWidth;
const H = window.innerHeight;

// gamestate
const PLAY = "play"
const START = "start"
const END = "end"
var game_state = START;


//player and computer
var player, computer;

//ball
var ball;

//edges
var edges;

// player score
var player_score;
localStorage["player_highscore"];

// computer score
var computer_score;
localStorage["computer_score"];

function setup() {
    createCanvas(W, H);

    createMain();
}

function draw() {
    background(0);

    createBounceOffs();

    start();

    display_score();

    drawSprites();
}
