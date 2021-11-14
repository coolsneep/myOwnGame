class Building{
    constructor(x,y,width,height){
        var options = {
            // restitiution:0,
            frictionAir:.2
            // density:0
            // isStatic:true
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
    
    //rotate()
    rect(pos.x,pos.y,this.width,this.height);
    imageMode(CENTER);
    //image(this.image, pos.x, pos.y,this.width,this.height)
    pop();
    console.log("display1")
}
// destroy(){
//     var pos = this.body.position 
//     if (pos.y>=200){
//         World.remove(world, this.body)
//      }
// }
moveLeft(){
   this.body.position.x -= 1
}
moveRight(){
    this.body.position.x += 1
 }
freeze(){
    if(this.body.position.y >= 240){
         
        counters = 0
        rect(this.body.position.x,this.body.position.y,10,10);
        console.log("frozen")
        }
}
test(){
    if(this.body.position.y >=240){
        createBuilding();
    }
}
rectDraw(){
    rect(this.body.position.x,this.body.position.y,10,10)
}
}

