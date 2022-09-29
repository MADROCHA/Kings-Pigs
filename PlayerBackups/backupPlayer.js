class Player extends Sprite {
    constructor({
        collisionBlocks = [],
        imageSrc,
        frameRate
    }) {
        super({imageSrc, frameRate})
        this.position = {
            x: 200,
            y: 200,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        //this.width = 25;
        //this.height = 25;
        this.gravity = 1;
        this.collisionBlocks = collisionBlocks
        console.log(this.collisionBlocks)
        this.sides = {
            bottom: this.position.y + this.height
        }
    }
/*     
draw(){
        c.strokeStyle = 'blue';
        c.strokeRect(this.position.x, this.position.y, this.width, this.height);
        //c.fillStyle = 'orange';
        //c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    } 
    */
    update(){
        c.strokeStyle = 'blue';
        c.strokeRect(this.position.x, this.position.y, this.width, this.height);
        
        //horizontal collisions
        this.position.x += this.velocity.x
        //vertical collisions
        this.checkForHorizontalCollisions() 
        this.applyGravity()
        this.hitBox = {
            position:{
                x: this.position.x + this.width * 0.40,//+58
                y: this.position.y + this.height * 0.26,//+34
            },
            width: 42,
            height: 58,    
        }
        c.strokeStyle = 'white'
        c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
        this.checkForVerticalCollisions()
        
    //OLD_ above canvas bottom; aka: value'height'
        //this.sides.bottom = this.position.y + this.height
        /*
        if(this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity
            
        } else this.velocity.y = 0
        */
    } 
    checkForHorizontalCollisions (){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            // if collision happens
            if (
                this.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.position.x +this.width >= collisionBlock.position.x
                && this.position.y + this.height >= collisionBlock.position.y
                && this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // horizontal x axis collision player and sprite
                if (this.velocity.x < -0) {
                    this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                }

                if (this.velocity.x > 0) {
                    this.position.x = collisionBlock.position.x - this.width - 0.01
                }
            }
        }
    }
    applyGravity(){
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
    checkForVerticalCollisions(){
        for (let i = 0; i < this.collisionBlocks.length; i++){
            const collisionBlock = this.collisionBlocks[i]
            // if collision happens
            if (
                this.position.x <= collisionBlock.position.x + collisionBlock.width
                && this.position.x +this.width >= collisionBlock.position.x
                && this.position.y + this.height >= collisionBlock.position.y
                && this.position.y <= collisionBlock.position.y + collisionBlock.height
            ) {
                // horizontal x axis collision player and sprite
                if (this.velocity.y < -0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                    break
                }

                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = collisionBlock.position.y - this.height - 0.01
                    break
                }
            }
        }
    }
}
