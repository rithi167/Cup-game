class Cup{
  constructor(x, y, width, height, angle) {
      var options = {
          restitution:0.4,
          friction:0.0,
          density:1.0
      }
      this.width = width;
      this.height = height;
      this.Visiblity = 255
      this.image=loadImage("redcup.png");
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      if(this.body.speed < 3){
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
    
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 7;
      tint(255,this.Visiblity);
      pop();
    }
  }
}
      
  
  