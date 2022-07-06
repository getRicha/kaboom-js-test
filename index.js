import kaboom from "kaboom";

kaboom()

add([text('hello world!'),pos(300,80)])

//Sprite
loadSprite('player','builds/characters.png',{
    sliceX: 2,
    sliceY: 1,
})

//Character
const player = add([
    sprite('player',{
        frame:0,
    }),
    pos(300,100),
    scale(3),
    body(),
    area(),
])

//Floor
add([
    rect(width(), 50),
    pos(0,height()-50),
    outline(4),
    area(),
    solid(),
    color(MAGENTA),
])

onKeyPress('space', () => {
    player.jump()
})

onKeyDown('d',() => {
    player.move(200,0)
})

onKeyDown('a',() => {
    player.move(-200,0)
})