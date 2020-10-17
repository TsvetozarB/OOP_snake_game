
import { Snake } from "./snake.js";
import { Grid } from "./grid.js";

const snake = new Snake();
const grid = new Grid(21);
const expansionRate = 1;

export class Food {
    constructor() {
        this.food = this.getRandomFoodPosition();
        this.foodScore = 0;
        this.snakeSpeed = snake.snake_speed;
    }

    draw(gameBoard) {
        this.gameBoard = gameBoard;
        const foodElement = document.createElement('div');
        foodElement.style.gridRowStart = this.food.y;
        foodElement.style.gridColumnStart = this.food.x;
        foodElement.classList.add('food');
        this.gameBoard.appendChild(foodElement);
        
    }

    getRandomFoodPosition() {
        let newFoodPosition;
        while (newFoodPosition == null || snake.onSnake(newFoodPosition)) {
            newFoodPosition = grid.randomGridPosition();
        }
    
        return newFoodPosition;
    }

    update() {
        if (snake.onSnake(this.food)) {
            snake.expandSnake(expansionRate);
            this.food = this.getRandomFoodPosition();
            this.foodScore ++;
            this.snakeSpeed = (3 + Math.floor(this.foodScore / 10));
        }
    }
}





