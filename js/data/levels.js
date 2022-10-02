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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel1.png',
})
    doors = [
        new Sprite({
            position: {
                x:767,
                y:270,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    boxs = [
        new Sprite({
            position: {
                x:500,
                y:355
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
        new BoxSprite({
            position: {
                x:300,
                y:255
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
        new BoxSprite({
            position: {
                x:300,
                y:205
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:600,
                y:275
                //y:325
            },
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true,
                }),
        new smallDiamond({
            position: {
                x:645,
                y:210
            },
                    
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel2.png',
})
    doors = [
        new Sprite({
            position: {
                x:772,
                y:336,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    boxs = [
        new BoxSprite({
            position: {
                x:220,
                y:150
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:130,
                y:480
                //x:139.5,
                //y:460
            },
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true,
                }),
        new smallDiamond({
            position: {
                x:350,
                y:420
            },        
                }),
        new smallDiamond({
            position: {
                x:480,
                y:420
                //x:331.5,
                //y:204
            },          
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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel3.png',
    })
    doors = [
        new Sprite({
            position: {
                x:176,
                y:334,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    boxs = [
        new BoxSprite({
            position: {
                x:650,
                y:150
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:130,
                y:220
            },
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true,
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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel4.png',
    })
    doors = [
        new Sprite({
            position: {
                x:832,
                y:320 - 112,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    boxs = [
        new Sprite({
            position: {
                x:150,
                y:150
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:725,
                y:265
            },
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true,
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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel5.png',
    })
    doors = [
        new Sprite({
            position: {
                x:474,
                y:338,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    boxs = [
        new Sprite({
            position: {
                x:385,
                y:415
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:202,
                y:335
            },
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true,
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
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel6.png',
    })
    doors = [
        new Sprite({
            position: {
                x:880,
                y:210 ,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    /* boxs = [
        new Sprite({
            position: {
                x:200,
                y:285
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ] */
    boxs = [
        new BoxSprite({
            position: {
                x:140,
                y:285
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:775,
                y:220
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
        new smallDiamond({
            position: {
                x:645,
                y:75
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
            ]
        }
    },
    7: {
        init: () => {
            parsedCollisions = collisionsLevel7.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            player.position.x = 15
            player.position.y = 420
            if (player.currentAnimation) player.currentAnimation.isActive = false
            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel7.png',
    })
    doors = [
        new Sprite({
            position: {
                x:920,
                y:400 ,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    /* boxs = [
        new Sprite({
            position: {
                x:200,
                y:285
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ] */
    boxs = [
        new BoxSprite({
            position: {
                x:845,
                y:220
            },
            collisionBlocks,
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:715,
                y:330
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
        new smallDiamond({
            position: {
                x:905,
                y:55
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
            ]
        }
    },
    8: {
        init: () => {
            parsedCollisions = collisionsLevel8.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks,
            player.position.x = 15
            player.position.y = 420
            if (player.currentAnimation) player.currentAnimation.isActive = false
            background = new Sprite({
    position: {
        x:0,
        y:0,
    },
    imageSrc: './img/backgroundLevelsFolder/backgroundLevel8.png',
    })
    doors = [
        new Sprite({
            position: {
                x:100,
                y:15 ,
            },
            imageSrc: './img/door/doorOpen.png',
            frameRate: 5,
            frameBuffer: 5,
            loop: false,
            autoplay: false,
                }),
            ]
    /* boxs = [
        new Sprite({
            position: {
                x:200,
                y:285
            },
            imageSrc: './img/boxfolder/idlebox.png',
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ] */
    boxs = [
        new BoxSprite({
            position: {
                x:845,
                y:220
            },
            collisionBlocks,    
            frameRate: 1,
            frameBuffer: 1,
            loop: false,
            autoplay: false,
                }),
            ]
    smallDiamonds = [
        new smallDiamond({
            position: {
                x:905,
                y:325
            },
            /* */            
        }),
        new smallDiamond({
            position: {
                x:265,
                y:400
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            
        }),
        new smallDiamond({
            position: {
                x:785,
                y:400
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
        new smallDiamond({
            position: {
                x:905,
                y:465
            },
            /* */            
            imageSrc: './img/livesAndCoins/bigDiamondIdle.png',
            //imageSrc: 'img/enemies/Pig/Idle(34x28).png',
            frameRate: 10,
            frameBuffer: 7,
            loop: true,
            autoplay: true, 
            
                }),
            ]
        }
    }
}