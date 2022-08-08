const canvas = document.getElementById('canvas1')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 800


const SPRITE_WIDTH = 218
const SPRITE_HEIGHT = 188

let frame = 0

class Enemy {
    constructor() {

        this.width = SPRITE_WIDTH/2
        this.height = SPRITE_HEIGHT/2

        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)

        this.image = new Image()
        this.image.src = '../../static/images/enemy3.png'

        this.flap = 0
        this.flapFrame = 0

        this.angle = 0
        this.angleSpeed = Math.random() * 1.5 + 0.5
        this.curve = Math.random() * 200

    }

    draw() {
        ctx.drawImage(this.image, this.flap * SPRITE_WIDTH, 0, SPRITE_WIDTH, SPRITE_HEIGHT, this.x, this.y, 100, 100 )
    }

    update() {

        this.x = this.curve * Math.sin(this.angle * Math.PI/90) + (canvas.width/2 + this.width/2)
        this.y = this.curve * Math.cos(this.angle * Math.PI/180) + (canvas.height/2 + this.height/2)
        

        this.angle += this.angleSpeed

        if(++this.flapFrame % 6 === 0) this.flap++

        this.flap %= 6

        
    }
}


const enemies = [...Array(100)].map(e => new Enemy())

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