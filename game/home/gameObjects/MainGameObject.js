class MainGameObject extends GameObject {
    constructor() {
        super("Main")
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"black", points:Assets.square})
        this.addComponent(new Polygon(), {fillStyle:"pink", points:[
            new Vector2(-18, -18), 
            new Vector2(18, -18),
            new Vector2(18, 18),
            new Vector2(-18, 18)
        ]})
    }
}