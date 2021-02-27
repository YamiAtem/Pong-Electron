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

function setup() {
    createCanvas(W, H);

    createMain(player, computer, ball, edges);
}

function draw() {
    background(255);

    createBounceOffs(ball);

    start(ball, game_state);
    

    drawSprites();
}
