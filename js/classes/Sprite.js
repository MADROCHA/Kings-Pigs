class Sprite {
    constructor({
        position,
        imageSrc, 
        frameRate = 1, 
        animations, 
        frameBuffer = 1, 
        loop = true,
        autoplay = true,
    }) {
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
        //c.strokeStyle = 'red'
        //c.strokeRect(this.position.x, this.position.y)
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
            if(!ui.debug){
                c.strokeStyle = 'blue'
                c.strokeRect(this.position.x, this.position.y, cropBox.width, cropBox.height)
                /*
                // collision wip 0.1
                c.strokeStyle = 'gold'
                c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
                // 
                */
            }
            this.updateFrames()
            // collision wip 0.1
            /*
            this.updateHitbox()
              */
            //
    }
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
    /*    
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
            width: 46,
            height: 56,    
        }
    }
    //
     */
}
class BoxSprite extends Sprite {
        constructor(Sprite) {
        super(Sprite)
        this.velocity = {
            x:0,
            y:0,
        }
        this.weight = 0.1
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
        this.updateHitbox()
        // collision wip 0.1
        if(!ui.debug){
            c.strokeStyle = 'gold'
            c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
        }
        //
    }
    update(){
        //  this.applyWeight()
        //this.checkForVerticalCollisions()
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
    /* checkForVerticalCollisions(){
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
    } */
}
/* class DiamondSprite extends Sprite {
        constructor(Sprite) {
        super(Sprite)
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
} */