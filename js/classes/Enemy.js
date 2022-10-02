class Enemy extends Sprite {
    constructor({
        collisionBlocks = [],
        imageSrc,
        frameRate,
        animations,
        loop,
    }){
        super({
            imageSrc,
            frameRate,
            animations,
            loop,
        })
    }
}

const Pig = new Enemy ({
    imageSrc: './img/enemies/Pig/idle(34x28).png',
    frameRate: 11,
})
