class MainGameObject extends GameObject {
    constructor() {
        super("Main", [], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.square})

        this.addComponent(new Collider())
        this.addComponent(new RigidBody(), {gravity:1200})
    }
}