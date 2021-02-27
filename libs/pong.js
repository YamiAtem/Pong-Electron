function create_main() {
    //Player sprite
    player = createSprite(796, 241 - 40, 20, 96.4);
    player.shapeColor = "blue";

    //Computer
    computer = createSprite(60, 241 - 40, 20, 96.4);
    computer.shapeColor = "red";

    //ball
    ball = createSprite(428 - 12.5, 241 - 12.5, 25, 25);
    ball.shapeColor = "yellow";

    //edges
    edges = createEdgeSprites();
}

function create_bounce_offs() {
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(player);
    ball.bounceOff(computer);
}

function start() {
    if (keyDown("space") && game_state === START) {
        ball.velocityX = 2;
        ball.velocityY = 2;

        game_state = PLAY;
    }
}

function display_score() {
    textSize(15);
    fill("blue");
    text("Player Score: " + player_score, 600, 30);
    text("Payer Highscore: " + localStorage["player_highscore"], 600, 50);

    fill("red");
    text("Computer Score: " + computer_score, 20, 30);
    text("Computer Highscore: " + localStorage["computer_score"], 20, 50);
}

function create_net() {
    for (var i = 0; i < 482; i += 20) {
        stroke(255, 255, 255);
        line(428, i, 428, i + 10);
    }
}
