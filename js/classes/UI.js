class PlayerUI /* extends Sprite */ {
    constructor({
        position,
        imageSrc, 
        frameRate, 
        animations, 
        frameBuffer, 
        loop = true,
        autoplay = true,
        
    }) {
        /* super(
            position,
            imageSrc, 
            frameRate, 
            animations, 
            frameBuffer, 
            loop = true,
            autoplay = true,
        ) */
        
        
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
                x:this.width * this.currentFrame ,//-4,
                y:0,
            },
            width: this.width ,//-4,
            height: this.height,
        }
        //c.strokeStyle = 'red'
        //c.strokeRect(this.position.x, this.position.y)
        //for (let i = 0; i < player.liveStats.currentLives; i++ ){
            c.drawImage(
                this.image ,
                cropBox.position.x  ,
                cropBox.position.y , 
                cropBox.width , 
                cropBox.height, 
                this.position.x, 
                this.position.y,
                this.width ,
                this.height
                ) 
           // }
            if(!ui.debug){
                c.strokeStyle = 'blue'
                c.strokeRect
                    (
                    this.position.x,
                    this.position.y,
                    cropBox.width,// +4,
                    cropBox.height
                    )
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
}

const DiamondUI = new PlayerUI({
    imageSrc: 'img/livesAndCoins/SmallDiamond.png',
    position: {
        x:5,
        y:50
    },
    frameRate: 8,
    frameBuffer: 8,

})
const LiveBarUI = new PlayerUI({
    imageSrc: 'img/livesAndCoins/liveBar.png',
    position: {
        x:0,
        y:0
    },
    frameRate: 1,
    frameBuffer: 1,
})
/* const HeartUI = new PlayerUI({
    imageSrc: 'img/livesAndCoins/SmallHeartIdle.png',
    position: {
        x:20,
        y:20
    },
    frameRate: 8,
    frameBuffer: 8,
})  */
/* */
class HeartUI    {
    constructor({
        position,
        imageSrc, 
        frameRate, 
        animations, 
        frameBuffer, 
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
        }
    }
    draw(){
        
        if (!this.loaded) return
        const cropBox = {
            position: {
                x:this.width * this.currentFrame ,
                y:0,
            },
            width: this.width ,
            height: this.height,
        }

        
        for (let i = 0; i < player.liveStats.currentLives; i++){
            c.drawImage(
                this.image,
                cropBox.position.x ,
                cropBox.position.y, 
                cropBox.width, 
                cropBox.height, 
                this.position.x * i + 24, 
                this.position.y,
                this.width,
                this.height
                )
            }
            /* c.drawImage(
                this.image,
                cropBox.position.x ,
                cropBox.position.y, 
                cropBox.width, 
                cropBox.height, 
                this.position.x ,
                this.position.y,
                this.width,
                this.height
                ) */
            if(!ui.debug){
                c.strokeStyle = 'blue'
                c.strokeRect
                    (
                    this.position.x,
                    this.position.y,
                    cropBox.width,// +4,
                    cropBox.height
                    )

            }
            this.updateFrames()

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
} 

/* const HeartUI = new PlayerUI({
    imageSrc: 'img/livesAndCoins/SmallHeartIdle.png',
    position: {
        x:66,
        y:34
    },
    frameRate: 8,
    frameBuffer: 8,
}) */
