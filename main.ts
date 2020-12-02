let dist = 0
basic.forever(function () {
    dist = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(dist)
    if (dist < 10) {
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    }
})
