class Paper {
    constructor() {
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }

        this.body = Bodies.circle(100,640,15, options);
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;

        fill("lightblue");
        ellipseMode(RADIUS)
        strokeWeight(3.75);
        stroke("darkblue");
        ellipse(pos.x, pos.y,15,15);
    }
}