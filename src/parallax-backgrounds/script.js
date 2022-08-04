const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 600

const BACKGROUND_WIDTH = 2400

const GAME_SPEED = 10

class Layer {

    constructor(image, speed) {
        this.x = 0

        this.image = new Image()
        this.image.src = image
    }

    draw() {
        ctx.drawImage(this.image, this.x, 0)
        ctx.drawImage(this.image, this.x + BACKGROUND_WIDTH, 0)
    }

    update() {
        this.x = this.x % BACKGROUND_WIDTH - GAME_SPEED
        console.log(this.x);
    }
}

const layer = new Layer(`../../static/images/layer-4.png`)


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    layer.draw()
    layer.update()

    requestAnimationFrame(animate)
}

animate()