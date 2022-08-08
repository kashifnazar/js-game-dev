const canvas = document.getElementById('canvas1')

/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 800

let mouseX, mouseY = 0

canvas.addEventListener('mousemove', e => {
    mouseX = e.offsetX
    mouseY = e.offsetY
})


class Circle {
    
    constructor(x, y, radius, color, fixed = true) {
        this.x = x
        this.y = y
        this.color = color
        this.radius = radius
        this.fixed = fixed
    }

    udpate() {
        if(!this.fixed) {
            this.x = mouseX
            this.y = mouseY
        }
        return this
    }
    
    draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fill()
        ctx.fillStyle = null
    }
}

const circles = [new Circle(100, 100, 50, 'red'), new Circle(500, 500, 50, 'green', false)]


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    circles.forEach(c => {
        c.udpate().draw()
    })

    requestAnimationFrame(animate)
}

animate()