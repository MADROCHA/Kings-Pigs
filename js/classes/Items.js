class DiamondSprite extends Sprite {
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
}