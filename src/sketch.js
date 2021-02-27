/// <reference path="../libs/p5.d.ts"/>
/// <reference path="../libs/p5.global-mode.d.ts"/>

const W = window.innerWidth;
const H = window.innerHeight;

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
    background(0);

    drawSprites();
}
