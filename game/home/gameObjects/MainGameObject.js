class MainGameObject extends GameObject {
    constructor() {
        super("Main", [], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.square})
    }
}