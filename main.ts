controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    flipHorrizontal()
})
function flipHorrizontal () {
    mySprite.image.flipX()
    pause(200)
}
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(assets.image`person`, SpriteKind.Player)
