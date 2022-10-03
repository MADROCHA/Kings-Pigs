const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 64 * 16 // 1024
canvas.height = 64 * 9 // 576

let parsedCollisions;
//console.log(parsedCollisions)
let collisionBlocks;
let background;
let doors;
let boxs;
let enemies;
// level 6
//let boxs1;
// level 6

let smallDiamonds;
const player = new Player({
    //same thing as -v-
    //collisionBlocks: collisionBlocks
    
    imageSrc: './img/king/idle.png',
    frameRate: 11,
    animations: {
        idleLeft: {
            frameRate: 11,
            frameBuffer: 3,
            loop: true,
            imageSrc: './img/king/idleLeft.png',
        },
        idleRight: {
            frameRate: 11,
            frameBuffer: 3,
            loop: true,
            imageSrc: './img/king/idle.png',
        },
        runLeft: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runLeft.png',
        },
        runRight: {
            frameRate: 8,
            frameBuffer: 4,
            loop: true,
            imageSrc: './img/king/runRight.png',
        },
        enterDoor: {
            frameRate: 8,
            frameBuffer: 4,
            loop: false,
            imageSrc: './img/king/enterDoor.png',
            onComplete: () => {
                console.log('completed animation')
                //overlay.opacity 0 1 
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () =>{
                        
                        level++
                        if (level === 9) {
                            level = 1
                        }
                        levels[level].init()
                        //player.switchState('idleRight')
                        player.switchState('idleLeft')
                        player.nullifyInput = false
                        

                        gsap.to(overlay, {
                            opacity: 0,
                        })
                    }
                })
            },
        },
    },
});


const keys = {
    w: {
        pressed:false
    },
    a: {
        pressed:false
    },
    s: {
        pressed:false
    },
    d: {
        pressed:false
    },
    zero: {
        pressed:false
    }
}

const ui = new UI()
const overlay = {
    opacity: 0,
}
const heartUI = new HeartUI({
    imageSrc: 'img/livesAndCoins/SmallHeartIdle.png',
    position: {
        x:20,
        y:20,
    },
    frameRate: 8,
    frameBuffer: 8,
})
function animate(){
    window.requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width,canvas.height )
    
// OLD
//
//console.log(heartUI)
//HeartUI.draw()
// WIP 
    /*  
    diamonds.forEach(smallDiamonds=>{
        c.strokeStyle = 'red'
        c.strokeRect(10,10,100,100)
    }) 
    */
    //
    /*
    player.LifeStatus.playerLives.forEach(hearts =>{
        hearts.draw()
    }) 
    */
    /* 
    boxs1.forEach(box1 =>{
        box1.draw()
    }) 
    */
// OLD
    console.log(player.scoreStats.amountDiamonds)
    //  
    background.draw()
    //  
    //  
    collisionBlocks.forEach(collisionBlock =>{
        //c.fillStyle = 'azure';
        //c.fillRect(0, 0, canvas.width, canvas.height);
        collisionBlock.draw()
    })
    //  
    //  
    doors.forEach(door =>{
        door.draw()
    })
    
    //  
    //  
    boxs.forEach(box =>{
        box.draw()
        box.update()
    })
    //  
    smallDiamonds.forEach(diamonds =>{
        diamonds.draw()
        diamonds.update()
        smallDiamonds = smallDiamonds.filter(smallDiamonds => !smallDiamonds.markedForDeletion)
    })
    //  
    // UI 
    DiamondUI.draw()
    LiveBarUI.draw()
    if(player.liveStats.currentLives >= 1){
        heartUI.draw()
    }
    // UI 
    // Enemies
   /*  enemies.forEach(enemy =>{
        enemy.draw()
        enemy.update()
    }) */
    // Enemies
    // 
    player.handleInput(keys)
    player.draw()
    player.update()
    // 
    //console.log(diamonds)
    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'black'
    c.fillRect(0,0,canvas.width,canvas.height)
    c.restore()
}
levels[level].init()
animate();

