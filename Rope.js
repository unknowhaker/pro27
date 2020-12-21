class Rope {
    constructor(bodyA,bodyB){
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
        this.chain=Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        var possA=this.chain.bodyA.position;
        var possB=this.chain.bodyB.position;
        push();
        strokeWeight(3);
        line (possA.x,possA.y,possB.x,possB.y);
        pop();
    }
}