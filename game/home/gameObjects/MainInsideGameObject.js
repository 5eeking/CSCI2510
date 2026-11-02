class MainInsideGameObject extends GameObject {
    constructor() {
        super("MainInside", [], "foreground")
        this.addComponent(new Polygon(), {fillStyle:"pink", points:Assets.square})
        this.transform.scale = new Vector2(0.9, 0.9)
    }
}