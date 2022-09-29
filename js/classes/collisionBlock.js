class CollisionBlock {
    constructor({position}){
        this.position = position;
        this.width = 64;
        this.height = 64;
    }
    draw(){
        if(!ui.debug){
            c.fillStyle = 'red'
            c.fillStyle = 'rgb(255, 0, 0, 0.3)'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
    }
}