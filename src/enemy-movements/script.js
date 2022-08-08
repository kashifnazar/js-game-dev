const canvas = document.getElementById('canvas1')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 800


const SPRITE_WIDTH = 213
const SPRITE_HEIGHT = 213

let frame = 0

let gameFrame = 0

class Enemy {
    constructor() {

        this.width = SPRITE_WIDTH/2
        this.height = SPRITE_HEIGHT/2

        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)

        this.newX = Math.random() * (canvas.width - this.width)
        this.newY = Math.random() * (canvas.height - this.height)

        this.image = new Image()
        this.image.src = '../../static/images/enemy4.png'

        this.flap = 0
        this.flapFrame = 0
    }

    draw() {
        ctx.drawImage(this.image, this.flap * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 100, 100 )
        return this    
    }

    update() {

        if(gameFrame % 60 === 0) {
            this.newX = Math.random() * (canvas.width - this.width)
            this.newY = Math.random() * (canvas.height - this.height)
        }

        this.dx = this.x - this.newX
        this.dy = this.y - this.newY

        this.x -= this.dx/20
        this.y -= this.dy/20

        if(++this.flapFrame % 6 === 0) this.flap++

        if(this.x + this.width < 0) this.x = canvas.width

        this.flap %= 6    
    }
}


const enemies = [...Array(100)].map(e => new Enemy())

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    enemies.forEach(enemy => {   
            enemy.draw().update()
    })

    gameFrame++

    requestAnimationFrame(animate)
}

animate()