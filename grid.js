export class Grid {
    constructor() {
        this.grid_size = 21;
    }

    randomGridPosition() {
        return {
            x: Math.floor(Math.random() * this.grid_size) + 1,
            y: Math.floor(Math.random() * this.grid_size) + 1
        }
    }

    outsideGrid(position) {
        return (
            position.x < 1 || position.x > this.grid_size || position.y < 1 || position.y > this.grid_size
        );
    }
}

const obj_grid = new Grid();