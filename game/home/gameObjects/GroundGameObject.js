class GroundGameObject extends GameObject {
    constructor() {
        super("Ground")
        //this.addComponent(new GroundController())

        let color = "black"
        let count = 0
        for (let i = -6000 - window.innerWidth; i < 6000 + window.innerWidth/2; i += 100) {
            count += 1
            if (color == "green") {
                color = "darkgreen"
            } else {
                color = "green"
            }
            this.addComponent(new Polygon(), {fillStyle: color, points:[
                new Vector2(i + 768, 0),
                new Vector2(i + 868, 0),
                new Vector2(i + 868, window.innerHeight/2),
                new Vector2(i + 768, window.innerHeight/2)
            ]})
        }
    }
}