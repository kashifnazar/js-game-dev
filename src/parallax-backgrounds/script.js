const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 700

let gameSpeed = 5

const slider = document.getElementById('slider')
const speed = document.getElementById('speed')

speed.innerHTML = gameSpeed

slider.addEventListener('change', e => {

    console.log(e);

    gameSpeed = e.target.value
    speed.innerHTML = gameSpeed
})

class Layer {

    constructor(image, speed = 0.2) {
        this.x = 0
        this.width = 2400
        this.height = 700
        
        this.speed = speed

        this.image = new Image()
        this.image.src = image
    }

    draw() {
        ctx.drawImage(this.image, this.x, 0, this.width, this.height)
        ctx.drawImage(this.image, this.x + this.width, 0, this.width, this.height)
    }

    update() {
        const layerSpeed = gameSpeed * this.speed
        this.x = this.x % this.width - layerSpeed
    }
}

const layers = [1,2,3,4,5].map(n => new Layer(`../../static/images/layer-${n}.png`, n * .2))


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    layers.forEach(layer => {
        layer.draw()
        layer.update()
    })
    

    requestAnimationFrame(animate)
}

animate()