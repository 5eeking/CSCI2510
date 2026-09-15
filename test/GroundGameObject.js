class GroundGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new GroundController())

        let color = "black"
        let count = 0
        for (let i = -6000 - window.innerWidth/2; i < 6000 + window.innerWidth/2; i += 100) {
            count += 1
            console.log(i)
            if (color == "black") {
                color = "gray"
            } else {
                color = "black"
            }
            this.addComponent(new Polygon(), {fillStyle: color, points:[
                new Vector2(i, 30),
                new Vector2(i + 100, 30),
                new Vector2(i + 100, window.innerHeight/2),
                new Vector2(i, window.innerHeight/2)
            ]})
        }
        console.log(count)
        this.addComponent(new Polygon(), {fillStyle:"green", points:[
            new Vector2(-6000, 0),
            new Vector2(6000, 0),
            new Vector2(6000, 30),
            new Vector2(-6000, 30)
        ]})
    }
}