/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

const W = window.innerWidth;
const H = window.innerHeight;

var player_paddle, comp_paddle, ball;

function setup() {
    createCanvas(W, H);

    // paddles
    player_paddle = createSprite(770, 482-25, 10, 50);
}

function draw() {
    background(0);

    drawSprites();
}
