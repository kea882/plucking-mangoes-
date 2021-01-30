class Bob{
    constructor(x,y,r){
        var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png")
        this.body=Bodies.circle(this.x,this.y,this.r,options)
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.x,this.y,this.r,this.r)
    }
}