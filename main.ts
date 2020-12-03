let dist = 0
basic.forever(function () {
    dist = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(dist)
    basic.pause(100)
    if (dist < 10) {
        soundExpression.giggle.playUntilDone()
    }
})
