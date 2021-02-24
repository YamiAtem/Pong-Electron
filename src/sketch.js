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

    //Player sprite
    player = createSprite(796, 241 - 40, 20, 96.4);
    player.shapeColor = "blue";

    //Computer
    computer = createSprite(60, 241 - 40, 20, 96.4);
    computer.shapeColor = "red";

    //ball
    ball = createSprite(200, 200, 10, 10);
    ball.shapeColor = "yellow";

    //edges
    edges = createEdgeSprites();
}

function draw() {
    background(0);

    drawSprites();
}
