class Bases{
    constructor(x,y,width,height){
        var options = {
            // restitiution:0,
            // friction:0,
            // density:0
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.width = width
        this.height = height
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        //this.image = loadImage("download.png")
        World.add(world,this.body);        
    }

display(){
    var pos = this.body.position 
    push();
    translate(this.x,this.y)
    //rotate()
    stroke("white")
    rect(pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
    //image(this.image, pos.x, pos.y,this.width,this.height)
    pop();
}


}