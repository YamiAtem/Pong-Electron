/** 
 * creates main sprites like:
 * player paddle
 * computer paddle
 * ball
 * and edges
*/

function create_main() {
    //Player sprite
    player = createSprite(796, 241, 20, 96.4);
    player.shapeColor = "blue";

    //Computer
    computer = createSprite(60, 241, 20, 96.4);
    computer.shapeColor = "red";

    //ball
    ball = createSprite(428, 241, 25, 25);
    ball.shapeColor = "yellow";

    //edges
    edges = createEdgeSprites();
}

/** 
 * added bounce off
 * so that the ball bounces
 * off the edges and paddels
*/

function create_bounce_offs() {
    ball.bounceOff(edges[3]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(player);
    ball.bounceOff(computer);
}

/** 
 * starts the game when space bar is pressed
*/

function start() {
    if (keyDown("space") && game_state === START) {
        ball.velocityX = 2;
        ball.velocityY = 2;

        game_state = PLAY;
    }
}

/** 
 * added score display for
 * Play score and play hightscore
 * and Computer score and computer hightscore
*/

function display_score() {
    textSize(15);
    fill("blue");
    text("Player Score: " + player_score, 600, 30);
    text("Payer Highscore: " + localStorage["player_highscore"], 600, 50);

    fill("red");
    text("Computer Score: " + computer_score, 20, 30);
    text("Computer Highscore: " + localStorage["computer_score"], 20, 50);
}

/** 
 * creates a net running down the middle of the screen
*/

function create_net() {
    for (var i = 0; i < 482; i += 20) {
        stroke(255, 255, 255);
        line(428, i, 428, i + 10);
    }
}

/** 
 * starts the game and
 * allows the palyer to controll the player sprite with their mouse
 * computer sprite follows the ball on the y axis
 * ball starts moving
 * and scores get calculated
*/

function play() {
    if (game_state === PLAY) {
        //player control
        player.y = World.mouseY;

        //computer ai
        computer.y = ball.y;

        //adding computer scores
        if (ball.isTouching(edges[1])) {
            computer_score += 1;
            score += 1;

            reset();
        }

        //adding player scores
        if (ball.isTouching(edges[0])) {
            player_score += 1;
            score += 1;

            reset();
        }

        // increase difficulty
        if (score % 5 === 0 && score > 0) {
            ball.velocityX += 1;
            ball.velocityY += 1;
        }

        // End game
        if (computer_score === 20) {
            reset();

            ball.setVelocity(0, 0);

            textSize(20);
            text("GameOver computer wins!", 125, 250);

            game_state = END;
        }

        if (player_score === 20) {
            reset();

            ball.setVelocity(0, 0);

            textSize(20);
            fill("blue");
            text("GameOver player wins!", 125, 250);

            game_state = END;
        }
    }
}