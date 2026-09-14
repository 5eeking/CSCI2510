class GroundGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new Polygon(), {fillStyle:"black", points:[
            new Vector2(-window.innerWidth/2, 0),
            new Vector2(window.innerWidth/2, 0),
            new Vector2(window.innerWidth/2, window.innerHeight/2),
            new Vector2(-window.innerWidth/2, window.innerHeight/2)
        ]})
    }
}