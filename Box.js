class Box{
    constructor(x, y, width, height){
        var options = {
            'restitution' : 2.2, 
            'friction' : 0.5,
            'density' : 0.4,
            'isStatic' : false
        }

        this.body=Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width=width;
        this.height=height;
                              
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.position;        
        push();
        translate(pos.x, pos.y);
        rotate(angle); 
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}