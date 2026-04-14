enum PointAxis {
    //% block="x"
    X,
    //% block="y"
    Y
}

//% weight=100 color=#6d5ba5 icon="\uf030" block="Multiplayer Screen Average"
//% groups="['Center Camera', 'Offset', 'Values']"
namespace screenAverage {
    let _offsetX = 0
    let _offsetY = 0

    /**
     * Sets the x and y offset applied to the camera position.
     */
    //% block="set camera offset x $x y $y"
    //% group="Offset"
    //% x.defl=0Is
    //% y.defl=0
    export function setCameraOffset(x: number, y: number) {
        _offsetX = x
        _offsetY = y
    }

    /**
     * Changes the camera offset by the given x and y amounts.
     */
    //% block="change camera offset by x $x y $y"
    //% group="Offset"
    //% x.defl=0
    //% y.defl=0
    export function changeCameraOffset(x: number, y: number) {
        _offsetX += x
        _offsetY += y
    }

    /**
     * Centers the camera between two sprites for the whole game
     * and keeps both sprites in screen.
     */
    //% block="center camera between $mySprite and $mySprite2"
    //% group="Center Camera"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    export function centerBetween2(mySprite: Sprite, mySprite2: Sprite) {
        mySprite.setStayInScreen(true)
        mySprite2.setStayInScreen(true)

        game.onUpdate(function () {
            scene.centerCameraAt(
                (mySprite.x + mySprite2.x) / 2 + _offsetX,
                (mySprite.y + mySprite2.y) / 2 + _offsetY
            )
        })
    }

    /**
     * Centers the camera between three sprites for the whole game
     * and keeps all sprites in screen.
     */
    //% block="center camera between $mySprite and $mySprite2 and $mySprite3"
    //% group="Center Camera"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    export function centerBetween3(mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite) {
        mySprite.setStayInScreen(true)
        mySprite2.setStayInScreen(true)
        mySprite3.setStayInScreen(true)

        game.onUpdate(function () {
            scene.centerCameraAt(
                (mySprite.x + mySprite2.x + mySprite3.x) / 3 + _offsetX,
                (mySprite.y + mySprite2.y + mySprite3.y) / 3 + _offsetY
            )
        })
    }

    /**
     * Centers the camera between four sprites for the whole game
     * and keeps all sprites in screen.
     */
    //% block="center camera between $mySprite and $mySprite2 and $mySprite3 and $mySprite4"
    //% group="Center Camera"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    export function centerBetween4(mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite) {
        mySprite.setStayInScreen(true)
        mySprite2.setStayInScreen(true)
        mySprite3.setStayInScreen(true)
        mySprite4.setStayInScreen(true)

        game.onUpdate(function () {
            scene.centerCameraAt(
                (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x) / 4 + _offsetX,
                (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y) / 4 + _offsetY
            )
        })
    }

    /**
     * Centers the camera between five sprites for the whole game
     * and keeps all sprites in screen.
     */
    //% block="center camera between $mySprite and $mySprite2 and $mySprite3 and $mySprite4 and $mySprite5"
    //% group="Center Camera"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    //% mySprite5.shadow=variables_get
    //% mySprite5.defl=mySprite5
    export function centerBetween5(mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite, mySprite5: Sprite) {
        mySprite.setStayInScreen(true)
        mySprite2.setStayInScreen(true)
        mySprite3.setStayInScreen(true)
        mySprite4.setStayInScreen(true)
        mySprite5.setStayInScreen(true)

        game.onUpdate(function () {
            scene.centerCameraAt(
                (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x + mySprite5.x) / 5 + _offsetX,
                (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y + mySprite5.y) / 5 + _offsetY
            )
        })
    }

    /**
     * Centers the camera between six sprites for the whole game
     * and keeps all sprites in screen.
     */
    //% block="center camera between $mySprite and $mySprite2 and $mySprite3 and $mySprite4 and $mySprite5 and $mySprite6"
    //% group="Center Camera"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    //% mySprite5.shadow=variables_get
    //% mySprite5.defl=mySprite5
    //% mySprite6.shadow=variables_get
    //% mySprite6.defl=mySprite6
    export function centerBetween6(mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite, mySprite5: Sprite, mySprite6: Sprite) {
        mySprite.setStayInScreen(true)
        mySprite2.setStayInScreen(true)
        mySprite3.setStayInScreen(true)
        mySprite4.setStayInScreen(true)
        mySprite5.setStayInScreen(true)
        mySprite6.setStayInScreen(true)

        game.onUpdate(function () {
            scene.centerCameraAt(
                (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x + mySprite5.x + mySprite6.x) / 6 + _offsetX,
                (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y + mySprite5.y + mySprite6.y) / 6 + _offsetY
            )
        })
    }

    /**
     * Returns the average x or y position between two sprites.
     */
    //% block="$axis point between $mySprite and $mySprite2"
    //% group="Values"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    export function pointBetween2(axis: PointAxis, mySprite: Sprite, mySprite2: Sprite): number {
        if (axis === PointAxis.X)
            return (mySprite.x + mySprite2.x) / 2
        return (mySprite.y + mySprite2.y) / 2
    }

    /**
     * Returns the average x or y position between three sprites.
     */
    //% block="$axis point between $mySprite and $mySprite2 and $mySprite3"
    //% group="Values"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    export function pointBetween3(axis: PointAxis, mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite): number {
        if (axis === PointAxis.X)
            return (mySprite.x + mySprite2.x + mySprite3.x) / 3
        return (mySprite.y + mySprite2.y + mySprite3.y) / 3
    }

    /**
     * Returns the average x or y position between four sprites.
     */
    //% block="$axis point between $mySprite and $mySprite2 and $mySprite3 and $mySprite4"
    //% group="Values"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    export function pointBetween4(axis: PointAxis, mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite): number {
        if (axis === PointAxis.X)
            return (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x) / 4
        return (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y) / 4
    }

    /**
     * Returns the average x or y position between five sprites.
     */
    //% block="$axis point between $mySprite and $mySprite2 and $mySprite3 and $mySprite4 and $mySprite5"
    //% group="Values"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    //% mySprite5.shadow=variables_get
    //% mySprite5.defl=mySprite5
    export function pointBetween5(axis: PointAxis, mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite, mySprite5: Sprite): number {
        if (axis === PointAxis.X)
            return (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x + mySprite5.x) / 5
        return (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y + mySprite5.y) / 5
    }

    /**
     * Returns the average x or y position between six sprites.
     */
    //% block="$axis point between $mySprite and $mySprite2 and $mySprite3 and $mySprite4 and $mySprite5 and $mySprite6"
    //% group="Values"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    //% mySprite4.shadow=variables_get
    //% mySprite4.defl=mySprite4
    //% mySprite5.shadow=variables_get
    //% mySprite5.defl=mySprite5
    //% mySprite6.shadow=variables_get
    //% mySprite6.defl=mySprite6
    export function pointBetween6(axis: PointAxis, mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite, mySprite4: Sprite, mySprite5: Sprite, mySprite6: Sprite): number {
        if (axis === PointAxis.X)
            return (mySprite.x + mySprite2.x + mySprite3.x + mySprite4.x + mySprite5.x + mySprite6.x) / 6
        return (mySprite.y + mySprite2.y + mySprite3.y + mySprite4.y + mySprite5.y + mySprite6.y) / 6
    }
}
