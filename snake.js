import { Input } from "./input.js";

const input = new Input();

let snakeBody = [{x: 10, y: 11}];
let newSegments = 0;


export class Snake {
    constructor() {
        this.snake_speed = 3;
        this.scores = 0;
    }

    update() {
        
        this.addSegments();
    
        const inputDirection = input.getInputDirection();
        for (let i = snakeBody.length - 2; i >= 0; i--) {
            snakeBody[i + 1] = {...snakeBody[i]};        
        }
    
        snakeBody[0].x += inputDirection.x;
        snakeBody[0].y += inputDirection.y;
    }

    draw(gameBoard) {
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.style.gridRowStart = segment.y;
            snakeElement.style.gridColumnStart = segment.x;
            snakeElement.classList.add('snake');
            gameBoard.appendChild(snakeElement);
        });
    }


    expandSnake(amount) {
        newSegments += amount;
        this.scores++;
        this.snake_speed = (3 + Math.floor(this.scores / 10));
    }
    
    onSnake(position, {ignorHead = false} = {}) {
        return snakeBody.some( (segment, index) => {
            if (ignorHead && index === 0) return false
            return this.equalPositions(segment, position);
        });
    }
    
    getSnakeHead() {
        return snakeBody[0];
    }
    
    snakeIntersection() {
        return this.onSnake(snakeBody[0], {ignorHead: true})
    }
    
    equalPositions(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }
    
    addSegments() {
        for (let i = 0; i < newSegments; i++) {
            snakeBody.push({ ...snakeBody[snakeBody.length - 1]});
            
        }
     
        newSegments = 0;
    }
}

const obj_snake = new Snake();
