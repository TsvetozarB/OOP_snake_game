import { Snake } from './snake.js';
import { Food } from './food.js';
import { Grid } from './grid.js';

const snake = new Snake();
const food = new Food();
const grid = new Grid();
let gameOver = false;
let lastRenderTime = 0;
let gameBoard = document.getElementById('game-board');
let time;

export class Game {
    constructor() {
    }

    main = (currentTime) => {
        time = currentTime;

        if (gameOver) {
            snake.scores = food.foodScore;
            snake.snake_speed = food.snakeSpeed;
            if (confirm(`You lost!!! 
            Score: ${snake.scores}
            Speed: ${snake.snake_speed} 
            Press ok to restart the game!`)) {
                location = '/'
            }
            return
        };

        
        requestAnimationFrame(this.main);
        const secondsSinceLastRender = (time - lastRenderTime) / 1000;
        if (secondsSinceLastRender < 1 / food.snakeSpeed) {
            return
        };
        
        lastRenderTime = time;
        
        this.game_update();
        this.game_draw();
    };
    
    game_update() {
        snake.update(); 
        food.update();
        this.checkDeath();
    };

    game_draw() {
        gameBoard.innerHTML = '';
        snake.draw(gameBoard);
        food.draw(gameBoard);

    };
    
    checkDeath() {
        gameOver = grid.outsideGrid(snake.getSnakeHead()) || snake.snakeIntersection();
    };
    
}

const obj_game = new Game();
requestAnimationFrame(obj_game.main);
