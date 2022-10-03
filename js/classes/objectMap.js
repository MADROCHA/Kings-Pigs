class ObjectMap  {
    constructor(
        {position,
        animations, 
        imageSrc = './img/livesAndCoins/bigDiamondIdle.png',
        frameRate = 1,
        frameBuffer = 1,
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
    this.updateFrames()
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
}

class BoxSprite extends ObjectMap {
    constructor(
        {position,
        animations, 
        imageSrc = './img/boxfolder/idlebox.png',
        frameRate ,
        frameBuffer ,
        loop = true,
        autoplay = true,
        collisionBlocks = [],
        boxs =[],
    }) {
        super({position,
            animations, 
            imageSrc ,
            frameRate ,
            frameBuffer ,
            loop ,
            autoplay ,
            collisionBlocks,
        })
        //
        this.position = position;
        this.width = 44;
        this.height = 32;
        //
        this.boxs = boxs
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
    this.updateFrames()
    this.updateHitbox()
    if(!ui.debug){
        c.strokeStyle = 'gold'
        c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
    }
    this.checkForVerticalCollisions()
    
    //this.velocity.x = 0.5
    
// collision boxes WIP
    //this.checkForPlayer()
// collision boxes WIP
    }
// collision boxes WIP
/* 
    checkForPlayer (){
        for (let i = 0; i < this.boxs.length; i++){
            const collisionBox = this.boxs[i]
            // if collision happens
            if (
                this.hitBox.position.x <= collisionBox.position.x + collisionBox.width
                && this.hitBox.position.x +this.hitBox.width >= collisionBox.position.x
                && this.hitBox.position.y + this.hitBox.height >= collisionBox.position.y
                && this.hitBox.position.y <= collisionBox.position.y + collisionBox.height
            ) {
        console.log('hi there line objectMaps 270')
                // horizontal x axis collision player and sprite
                if (this.velocity.x < -0) {
                    const offsetBox = this.hitBox.position.x - this.position.x
                    this.position.x = collisionBox.position.x + collisionBox.width - offsetBox + 0.01
        console.log('hi there line objectMaps 274')
                    break
                }
                
                if (this.velocity.x > 0) {
                    const offsetBox = this.hitBox.position.x - this.position.x + this.hitBox.width
                    this.position.x = collisionBox.position.x - offsetBox - 0.01
        console.log('hi there line objectMaps 281')
                    break
                }
            }
        }
    } 
    */
// collision boxes WIP
}