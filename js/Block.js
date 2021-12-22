class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
            isStatic : false
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("block.png")
        this.visiblity = 255;
        World.add(world, this.body);
      }

      display(){

        var pos= this.body.position;
        imageMode(CENTER);
       //I have increase the minimum amount of speed since in the start only all the blocks where disapearing. 
        if(this.body.speed <5){
          image(this.image,pos.x,pos.y,this.width, this.height);
        }
        else{

          World.remove(world, this.body);
          push();
          //we are decreasing visibility everytime so it fades away slowly. 
            this.visiblity = this.visibility - 5
            //255 is equal to white so we are masking the blocks with white to make it disapear. 
            tint(255, this.visiblity)
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }


        }
}