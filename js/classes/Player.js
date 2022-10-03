class Player extends Sprite {
    constructor({
        collisionBlocks = [],
        imageSrc,
        frameRate,
        animations,
        loop,
        //boxs = [],
    }) {
        super({imageSrc, frameRate, animations, loop})
        this.scoreStats = {
            amountDiamonds: 0,
        }
        this.liveStats = {
            playerLives: [
                //
                /* 
                new PlayerUI({
                imageSrc: 'img/livesAndCoins/SmallHeartIdle.png',
                position: {
                    x:20,
                    y:20
                },
                frameRate: 8,
                frameBuffer: 8,
            }),
                new PlayerUI({
                imageSrc: 'img/livesAndCoins/SmallHeartIdle.png',
                position: {
                    x:43,
                    y:20
                },
                frameRate: 8,
                frameBuffer: 8,
            }), 
            */
            //
            ],
            currentLives: 3,
            minLives: 1,
            maxLives: 3,
        }
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
        this.gravity = 0.9,
        this.collisionBlocks = collisionBlocks
        //console.log(this.collisionBlocks)
        this.sides = {
            bottom: this.position.y + this.height
        }
        //this.jump = false // JUMP 0.1C
        this.hitBox = {
            position:{
                //x: this.position.x + this.width * 0.40,
                //y: this.position.y + this.height * 0.26,
                //x: this.position.x + this.width * 0.34,
                //y: this.position.y + this.height * 0.26,
                x: this.position.x +55,
                y: this.position.y +32
                //+58
                //+34
            },
            width: 46,
            height: 56,    
        }
    //this.boxs = boxs
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

        if(!ui.debug){
            c.strokeStyle = 'blue';
            c.strokeRect(this.position.x, this.position.y, this.width, this.height);
        }
        
        //horizontal collisions
        this.position.x += this.velocity.x
        this.updateHitbox()
        this.checkForHorizontalCollisions() 
        //vertical collisions
        this.applyGravity()

        this.updateHitbox()
        if(!ui.debug){
            c.strokeStyle = 'white'
            c.strokeRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)
        }
        this.checkForVerticalCollisions()
        
    //OLD_ above canvas bottom; aka: value'height'
        //this.sides.bottom = this.position.y + this.height
        /*
        if(this.sides.bottom + this.velocity.y < canvas.height){
            this.velocity.y += this.gravity
            
        } else this.velocity.y = 0
        */
//playerLives
        if( 
            this.position.y >= canvas.height 
            && this.liveStats.currentLives >= this.liveStats.minLives 
            
            ){
                this.position.y = 0
            this.liveStats.currentLives -=1
        }
        this.checkForPlayer()
//Console.log UPDATE
    // WIP:OLD collisions - empty array -v
    //console.log(this.boxs)
    //console.log(levels)
    // WIP:OLD collisions - empty array -v
    console.log(boxs)
    //Console.log UPDATE

    } 
    handleInput(keys){
        if(this.nullifyInput) return
        this.velocity.x = 0
        if(keys.d.pressed) {
            this.switchState('runRight')
            this.velocity.x = 5;
            this.lastDirection = 'right'
        } else if (keys.a.pressed) {
            this.switchState('runLeft')
            this.velocity.x = -5;
            this.lastDirection = 'left'
        } else {
            if (this.lastDirection === 'left') this.switchState('idleLeft')
            else this.switchState('idleRight')
        } 
    }
    switchState(name){
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
    }
    updateHitbox(){
        this.hitBox = {
            position:{
                //x: this.position.x + this.width * 0.40,
                //y: this.position.y + this.height * 0.26,
                //x: this.position.x + this.width * 0.34,
                //y: this.position.y + this.height * 0.26,
                x: this.position.x +55,
                y: this.position.y +32
                //+58
                //+34
            },
            width: 46,
            height: 56,    
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
    applyGravity(){
        this.velocity.y += this.gravity
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
    checkForPlayer (){
        for (let i = 0; i < boxs.length; i++){
            const collisionBox = boxs[i]
            // if collision happens
            if (
                this.hitBox.position.x <= collisionBox.hitBox.position.x + collisionBox.hitBox.width
                && this.hitBox.position.x +this.hitBox.width >= collisionBox.hitBox.position.x
                && this.hitBox.position.y + this.hitBox.height >= collisionBox.hitBox.position.y
                && this.hitBox.position.y <= collisionBox.hitBox.position.y + collisionBox.hitBox.height
            ) {
        console.log('Horizontal Collision')
                // horizontal x axis collision player and sprite
                if (this.velocity.x < -0) {
                    const offset = this.hitBox.position.x - this.position.x
                    this.position.x = collisionBox.hitBox.position.x + collisionBox.hitBox.width - offset + 0.01
        console.log('Right X collision Player')
                    break
                }
                
                if (this.velocity.x > 0) {
                    const offset = this.hitBox.position.x - this.position.x + this.hitBox.width
                    this.position.x = collisionBox.hitBox.position.x - offset - 0.01
                    console.log('Left X collision Player')
                    break
                        }
                    }
                }
            } 
    }
