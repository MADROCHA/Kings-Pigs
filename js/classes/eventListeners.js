window.addEventListener('keydown', (e) =>{
    //console.log(e)
    if (player.nullifyInput) return
    switch (e.key) {
        case 'w':
            //console.log('Preesed W')
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i]
                if (
                    player.hitBox.position.x + player.hitBox.width <= door.position.x + door.width
                    && player.hitBox.position.x >= door.position.x
                    && player.hitBox.position.y + player.hitBox.height >= door.position.y
                    && player.hitBox.position.y <= door.position.y + door.height
                    ){
                    //console.log('we are colliding')
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.nullifyInput = true
                    player.switchState('enterDoor')
                    door.play()
                    return
                    }
                
            }
            for (let i = 0; i < player.collisionBlocks.length; i++){
                const collisionBlock = player.collisionBlocks[i]
            if ( 
                player.velocity.y === 0 
                &&
                (player.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width
                && player.hitBox.position.x +player.hitBox.width >= collisionBlock.position.x
                && player.hitBox.position.y + player.hitBox.height >= collisionBlock.position.y
                && player.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height)
                //&& player.checkForVerticalCollisions()
                //&& player.checkForVerticalCollisions()
                ) {
                    
                    player.velocity.y = -14;
                    //keys.w.pressed = !keys.w.pressed
                } 
            } 
            for (let i = 0; i < boxs.length; i++){
                const collisionBlock = boxs[i]
            if ( 
                player.velocity.y === 0 
                &&
                (player.hitBox.position.x <= collisionBlock.position.x + collisionBlock.width
                && player.hitBox.position.x +player.hitBox.width >= collisionBlock.position.x
                && player.hitBox.position.y + player.hitBox.height >= collisionBlock.position.y
                && player.hitBox.position.y <= collisionBlock.position.y + collisionBlock.height)
                //&& player.checkForVerticalCollisions()
                //&& player.checkForVerticalCollisions()
                ) {
                    
                    player.velocity.y = -14;
                    //keys.w.pressed = !keys.w.pressed
                } 
            } 
            /* // JUMP 0.1B
            if ( 
                player.velocity.y === 0 
                && !player.jump
                //&& player.checkForVerticalCollisions()
                //&& player.checkForVerticalCollisions()
                ) {
                    player.jump = true
                    
                    player.velocity.y = -14;
                    //keys.w.pressed = !keys.w.pressed
                } 
                console.log(player.jump) */
                
        break;
        case 'a':
            //console.log('Preesed A')
            keys.a.pressed = true
        break;
        case 's':
            //console.log('Preesed S')
                
        break;
        case 'd':
            //console.log('Preesed D')
            keys.d.pressed = true
        break;
        case '0':
            //console.log('Preesed D')
            keys.zero.pressed = true
            ui.debug = !ui.debug
            console.log(ui.debug)
        break;
            
    }
})
window.addEventListener('keyup', (e) =>{
    //console.log(e)
    switch (e.key) {
        case 'w':
            //console.log('Released W')
            //if ( player.velocity.y === 0)   player.velocity.y = -20;
            
            //player.jump = false //JUMP 0.1B
        break;
        case 'a':
            //console.log('Released A')
            keys.a.pressed = false
        break;
        case 's':
            //console.log('Released S')
            
        break;
        case 'd':
            //console.log('Released D')
            keys.d.pressed = false
        break;
            
    }
})