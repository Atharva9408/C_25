class DB
{
    constructor(x,y,w,h){
    var O2={isStatic:true}
    this.body=Bodies.rectangle(x,y,w,h,O2);
    this.image=loadImage("dustbingreen.png");
    this.widht=w;
    this.height=h;
    World.add(world,this.body);

    }
    display()
    {
        var p=this.body.position
        imageMode(CENTER);
      //  fill("white")
        image(this.image,p.x,p.y,this.widht,this.height);
    }
};