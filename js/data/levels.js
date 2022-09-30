let level = 1   
let levels = {
    1: {
        init: () => {
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks;
            player.position.x = 80
            player.position.y = 220
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel1.png',
})
    doors = [
        new Sprite({
            position: {
                x:767,
                y:270,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        },
    },
    2: {
        init: () => {
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            player.position.x = 96
            player.position.y = 140
            
            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel2.png',
})
    doors = [
        new Sprite({
            position: {
                x:772,
                y:336,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        },
    },
    3: {
        init: () => {
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            //player.position.x = 750
            //player.position.y = 110
            player.position.x = 750
            player.position.y = 110
    
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel3.png',
    })
    doors = [
        new Sprite({
            position: {
                x:176,
                y:334,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        },
    },
    4: {
        init: () => {
            parsedCollisions = collisionsLevel4.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            //player.position.x = 35
            //player.position.y = 100
            player.position.x = 720
            player.position.y = 420
    
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel4.png',
    })
    doors = [
        new Sprite({
            position: {
                x:832,
                y:320 - 112,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        },
    },
    5: {
        init: () => {
            parsedCollisions = collisionsLevel5.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            player.position.x = 550
            player.position.y = -700
    
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel5.png',
    })
    doors = [
        new Sprite({
            position: {
                x:474,
                y:338,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        },
    },
    6: {
        init: () => {
            parsedCollisions = collisionsLevel6.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            player.position.x = 46
            player.position.y = 46
    
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevel6.png',
    })
    doors = [
        new Sprite({
            position: {
                x:880,
                y:210 ,
            },
            imageSrc: './img/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
        }
    }
}