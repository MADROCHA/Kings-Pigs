class Currencies{
    constructor(
        {position,
        animations, 
        imageSrc = './img/livesAndCoins/LiveBar.png',
        frameRate = 1,
        frameBuffer = 2,
        loop = true,
        autoplay = true,}) {

        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc;
        this.loaded = false;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer;
        this.animations = animations;
        this.loop = loop;
        this.autoplay = autoplay;
        this.currentAnimation;

        if(this.animations) {
            for (let key in this.animations) {  
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            }
            //console.log(this.animations)
        }
}
draw(){
    if (!this.loaded) return
    const cropBox = {
        position: {
            x:this.width * this.currentFrame,
            y:0,
        },
        width: this.width,
        height: this.height,
    }
    
    c.drawImage(
        this.image,
        cropBox.position.x,
        cropBox.position.y, 
        cropBox.width, 
        cropBox.height, 
        this.position.x, 
        this.position.y,
        this.width,
        this.height
        )
    this.updateFrames()
    this.updateHitbox()
    // collision wip 0.1
    if(!ui.debug){
        c.strokeStyle = 'blue'
        c.strokeRect(this.position.x, this.position.y, this.width, this.height)
    }
    if(!ui.debug){
        c.strokeStyle = 'gold'
        c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
    }
    //
}
    // collisions wip 0.1
    updateHitbox(){
        this.hitBox = {
            position:{

                x: this.position.x +10,
                y: this.position.y +4

            },
            width: this.width * 0.7 ,
            height: this.height *0.7,    
        }
    }
    //
    play(){
        this.autoplay = true;
    }
    updateFrames(){
        if (!this.autoplay) return
        this.elapsedFrames++
        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate -1) this.currentFrame++
            else if (this.loop) this.currentFrame = 0
        }
        if (this.currentAnimation?.onComplete) {
            if( 
                this.currentFrame === this.frameRate -1 
                && !this.currentAnimation.isActive
                ) {
                    this.currentAnimation.onComplete()
                    this.currentAnimation.isActive = true;
            }
        }
}
}
class smallDiamond extends Currencies {
    constructor(
        {
        position,
        animations, 
        imageSrc = './img/livesAndCoins/bigDiamondIdle.png',
        frameRate = 10,
        frameBuffer = 7,
        loop = true,
        autoplay = true,
    }) {
        super({
            position,
            animations, 
            imageSrc,
            frameRate ,
            frameBuffer ,
            loop ,
            autoplay ,
        })
        this.markedForDeletion = false
        this.hitBox = {
            position:{

                x: this.position.x +10,
                y: this.position.y +4

            },
            width: this.width * 0.7 ,
            height: this.height *0.7,    
        } 
    }
    update(){
        if(this.checkCollision(player, this)){
            player.scoreStats.amountDiamonds++;
            this.markedForDeletion = true;
        }
    }
    checkCollision(player, rect2){
        return (
        player.hitBox.position.x < rect2.hitBox.position.x + rect2.hitBox.width &&
        player.hitBox.position.x + player.hitBox.width > rect2.hitBox.position.x &&
        player.hitBox.position.y < rect2.hitBox.position.y + rect2.hitBox.height &&
        player.hitBox.position.y + player.hitBox.height > rect2.hitBox.position.y )
        //
    }
}
/* class BoxSprite  {
    constructor(
        {position,
        animations, 
        imageSrc = './img/livesAndCoins/bigDiamondIdle.png',
        frameRate = 10,
        frameBuffer = 7,
        loop = true,
        autoplay = true,
        collisionBlocks = [],}) {
    
        this.velocity = {
            x:0,
            y:0,
        }
        this.collisionBlocks = collisionBlocks
        this.weight = 0.3
        this.position = position;
        this.image = new Image();
        this.image.onload = () => {
            this.loaded = true;
            this.width = this.image.width / this.frameRate
            this.height = this.image.height
        }
        this.image.src = imageSrc;
        this.loaded = false;
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.elapsedFrames = 0;
        this.frameBuffer = frameBuffer;
        this.animations = animations;
        this.loop = loop;
        this.autoplay = autoplay;
        this.currentAnimation;
        if(this.animations) {
            for (let key in this.animations) {  
                const image = new Image()
                image.src = this.animations[key].imageSrc
                this.animations[key].image = image
            }
            //console.log(this.animations)
        }
        this.sides = {
            bottom: this.position.y + this.height,
        }
    }
draw(){
    if (!this.loaded) return
    const cropBox = {
        position: {
            x:this.width * this.currentFrame,
            y:0,
        },
        width: this.width,
        height: this.height,
    }
    
    c.drawImage(
        this.image,
        cropBox.position.x,
        cropBox.position.y, 
        cropBox.width, 
        cropBox.height, 
        this.position.x, 
        this.position.y,
        this.width,
        this.height
        )
    //this.updateHitbox()
    // collision wip 0.1
}
//
update(){
    if(!ui.debug){
        c.strokeStyle = 'blue'
        c.strokeRect(this.position.x, this.position.y, this.width, this.height)
    }
    this.position.x += this.velocity.x
    //this.velocity.x = +1
    this.updateHitbox()
    this.checkForHorizontalCollisions()
    this.applyWeight()
    this.updateHitbox()
    if(!ui.debug){
        c.strokeStyle = 'gold'
        c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
    }
    this.checkForVerticalCollisions()
    
}
    // collisions wip 0.1
    updateHitbox(){
        this.hitBox = {
            position:{
                //x: this.position.x + this.width * 0.40,
                //y: this.position.y + this.height * 0.26,
                //x: this.position.x + this.width * 0.34,
                //y: this.position.y + this.height * 0.26,
                x: this.position.x,
                y: this.position.y
                //+58
                //+34
            },
            width: this.width -3,
            height: this.height,    
        }
    }
    //
    play(){
        this.autoplay = true;
    }
    updateFrames(){
        if (!this.autoplay) return
        this.elapsedFrames++
        if (this.elapsedFrames % this.frameBuffer === 0) {
            if (this.currentFrame < this.frameRate -1) this.currentFrame++
            else if (this.loop) this.currentFrame = 0
        }
        if (this.currentAnimation?.onComplete) {
            if( 
                this.currentFrame === this.frameRate -1 
                && !this.currentAnimation.isActive
                ) {
                    this.currentAnimation.onComplete()
                    this.currentAnimation.isActive = true;
            }
        }
}
    applyWeight(){
        this.velocity.y += this.weight
        this.position.y += this.velocity.y
    }
    checkForVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            // if collision happens
            if (
                this.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitBox.position.x +this.hitBox.width >= collisionBlock.position.x
                && this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y
                && this.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // vertical y axis collision player and sprite
                if (this.velocity.y < -0) {
                    this.velocity.y = 0
                    const offset = this.hitBox.position.y - this.position.y 
                    this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
                    break
                }

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    const offset = this.hitBox.position.y - this.position.y + this.hitBox.height
                    this.position.y = collisionBlock.position.y - offset - 0.01
                    break
                }
            }
        }
    }
    checkForHorizontalCollisions (){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            // if collision happens
            if (
                this.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.hitBox.position.x +this.hitBox.width >= collisionBlock.position.x
                && this.hitBox.position.y + this.hitBox.height >= collisionBlock.position.y
                && this.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // horizontal x axis collision player and sprite
                if (this.velocity.x < -0) {
                    const offset = this.hitBox.position.x - this.position.x
                    this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
                    break
                }

                if (this.velocity.x > 0) {
                    const offset = this.hitBox.position.x - this.position.x + this.hitBox.width
                    this.position.x = collisionBlock.position.x - offset - 0.01
                    break
                }
            }
        }
    }
    updateHitbox(){
        this.hitBox = {
            position:{
                //x: this.position.x + this.width * 0.40,
                //y: this.position.y + this.height * 0.26,
                //x: this.position.x + this.width * 0.34,
                //y: this.position.y + this.height * 0.26,
                x: this.position.x,
                y: this.position.y,
                //+58
                //+34
            },
            width: 44,
            height: 32,    
        }
    }
} */