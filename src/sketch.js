/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

const W = window.innerWidth;
const H = window.innerHeight;

var player_paddle, comp_paddle, ball;

function preload() {

}

function setup() {
    createCanvas(W, H);

    // paddles
    player_paddle = createSprite(770, 432, 10, 50);
}

function draw() {
    drawSprites();
}
