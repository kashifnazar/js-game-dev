const canvas = document.getElementById('canvas1')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 800


const SPRITE_WIDTH = 266
const SPRITE_HEIGHT = 188

let frame = 0

class Enemy {
    constructor() {
        this.x = (Math.random() * CANVAS_WIDTH)
        this.y = Math.random() * CANVAS_HEIGHT

        this.xSpeed = -Math.random() * 10
        // this.ySpeed = Math.random() * 10 - 8

        this.image = new Image()
        this.image.src = '../../static/images/enemy2.png'

        this.flap = 0
        this.flapFrame = 0

        this.angle = 0
        this.angleSpeed = Math.random() * .2

        this.curve = 5

    }

    draw() {
        ctx.drawImage(this.image, this.flap * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, SPRITE_WIDTH, SPRITE_HEIGHT )
    }

    update() {
        this.x += this.xSpeed
        this.y += this.curve * Math.sin(this.angle)

        
        if(++this.flapFrame % 6 === 0) this.flap++

        this.flap %= 6

        this.angle += this.angleSpeed
        
    }
}


const enemies = [...Array(100)].map(e => new Enemy())

console.log(enemies);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    enemies.forEach(enemy =>
        {   enemy.draw()
            enemy.update()
        }
    )

    requestAnimationFrame(animate)
}

animate()`  `