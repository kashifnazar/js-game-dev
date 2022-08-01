const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const PLAYER_IMAGE = './static/images/shadow_dog.png'

const playerImage = new Image()
playerImage.src = PLAYER_IMAGE

const SPRITE_WIDTH = 575
const SPRITE_HEIGHT = 523

let playerX = 0
let playerY = 1

let gameFrame = 0
const STAGGER_FRAMES = 5


const PLAYER_STATES = [
    {   
        name: 'idle',
        frames: 7
    }, {
        name: 'jump',
        frames: 7
    }
]

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    let position = Math.floor(gameFrame/STAGGER_FRAMES) % 10
    let frameX = position * SPRITE_WIDTH
    
    
    ctx.drawImage(playerImage, frameX, playerY * SPRITE_HEIGHT, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)

    gameFrame++

    requestAnimationFrame(animate)
}

animate()