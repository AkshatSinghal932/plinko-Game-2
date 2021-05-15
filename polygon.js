class Polygon{
    constructor(x,y){
        var options={
        'density':0.1
        }
        
        this.body=Bodies.circle(200,200,10)
        this.x=x;
        this.y=y;
        World.add(world,this.body);

    }
    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipse(pos.x,pos.y,this.body.radius,this.body.radius)
        pop();
    }
}