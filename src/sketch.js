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
var player_score = 0;
localStorage["player_highscore"] = 0;

// computer score
var computer_score = 0;
localStorage["computer_score"] = 0;

function setup() {
    createCanvas(W, H);

    create_main();
}

function draw() {
    background(0);

    create_bounce_offs();

    start();

    display_score();

    create_net();

    drawSprites();
}
