basic.forever(function () {
    images.createBigImage(`
        # # # # # # . # . #
        # . # . . # . # . #
        # # # # # # . # . #
        # . . # . . . # . #
        # . . # # # . # # #
        `).scrollImage(1, 200)
    basic.pause(2000)
    images.iconImage(IconNames.Heart).scrollImage(3, 200)
    basic.pause(2000)
    images.createBigImage(`
        # . # . # # # . # .
        # . # . # . # . # .
        # # # . # . # . # .
        . # . . # . # . . .
        . # . . # # # . # .
        `).scrollImage(2, 200)
    basic.pause(2000)
})
