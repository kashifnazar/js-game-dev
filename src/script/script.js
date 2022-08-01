const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d')

const CANVAS_WIDTH = canvas.width = 600
const CANVAS_HEIGHT = canvas.height = 600
const PLAYER_IMAGE = './static/images/shadow_dog.png'

let mode = 'idle'

const modeSelect = document.getElementById('mode-select')

modeSelect.addEventListener('change', (e) => mode = e.target.value)


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
    }, 
    {
        name: 'jump',
        frames: 7
    },
    {
        name: 'fall',
        frames: 7
    },
    {
        name: 'run',
        frames: 9
    },
    {
        name: 'dizzy',
        frames: 11
    },
    {
        name: 'sit',
        frames: 5
    },
    {
        name: 'roll',
        frames: 7
    },
    {
        name: 'bite',
        frames: 7
    },
    {
        name: 'ko',
        frames: 12
    },
    {
        name: 'gethit',
        frames: 4
    }
]

let playerPositions = {}

PLAYER_STATES.forEach((state, index) => {
    
    const loc = []

    for(let j = 0; j < state.frames; j++) {
        loc.push({
            x: j * SPRITE_WIDTH,
            y: index * SPRITE_HEIGHT,
        })
    }

    playerPositions[state.name] = loc
})

console.log(playerPositions);


function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    let position = Math.floor(gameFrame/STAGGER_FRAMES) % playerPositions[mode].length
    
    ctx.drawImage(playerImage, playerPositions[mode][position].x, playerPositions[mode][position].y, SPRITE_WIDTH, SPRITE_HEIGHT, 0, 0, SPRITE_WIDTH, SPRITE_HEIGHT)


    gameFrame++

    requestAnimationFrame(animate)
}

animate()