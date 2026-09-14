class MainGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle:"pink", points:[
            new Vector2(-20, -20),
            new Vector2(20, -20),
            new Vector2(20, 20),
            new Vector2(-20, 20),
        ]})
    }
}