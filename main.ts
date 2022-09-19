input.onButtonPressed(Button.A, function () {
    balls += 1
    basic.showNumber(balls)
    if (balls == 4) {
        basic.showString("TAKE YOUR BASE")
        control.reset()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("balls")
    basic.showString("" + (balls))
    basic.showString("strike")
    basic.showString("" + (strikes))
})
input.onButtonPressed(Button.B, function () {
    strikes += 1
    basic.showNumber(strikes)
    if (strikes == 3) {
        basic.showString("OUT")
        control.reset()
    }
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
let balls = 0
let strikes = 0
basic.showIcon(IconNames.Yes)
basic.showNumber(0)
strikes = 0
balls = 0
basic.forever(function () {
	
})
