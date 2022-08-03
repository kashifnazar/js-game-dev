const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 800
const CANVAS_HEIGHT = canvas.height = 600

const GAME_SPEED = 5

const backgroundLayers = [1,1,1,1,1].map((_1, index) => {
    const layer = new Image()
    layer.src = `../../static/images/layer-${index+1}.png`
    return layer
})

let x = 0

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    ctx.drawImage(backgroundLayers[3], x, 0)
    ctx.drawImage(backgroundLayers[3], x, 0)

    x -= GAME_SPEED

    requestAnimationFrame(animate)
}

animate()