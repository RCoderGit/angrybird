class box
{
    constructor(x,y,width,height)
    {

        var options={restitution:1.0
   // 'friction':0.3,
//'density':1.0}
        }
        this.boxObject=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.boxObject)
        this.width=width
        this.height=height

    }
    display()
    {
        var angle=this.boxObject.angle
        push()
        translate(this.boxObject.position.x,this.boxObject.position.y)
        rotate(angle)
        fill("white")
        strokeWeight(4)
        stroke("red")
        rectMode(CENTER)
        
        rect(this.boxObject.position.x,this.boxObject.position.y,this.width,this.height)
        pop()
    }
}