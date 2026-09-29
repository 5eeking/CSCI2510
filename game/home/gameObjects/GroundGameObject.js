class GroundGameObject extends GameObject {
    constructor() {
        super("Ground")

        let count = 0
        for (let i = -6000 - window.innerWidth; i < 6000 + window.innerWidth/2; i += 100) {
            count += 1
            if (Globals.groundColor == "green") {
                Globals.groundColor = "darkgreen"
            } else if (Globals.groundColor == "darkgreen") {
                Globals.groundColor = "green"
            } else if (Globals.groundColor == "red") {
                Globals.groundColor = "darkred"
            } else if (Globals.groundColor == "darkred") {
                Globals.groundColor = "red"
            }
            this.addComponent(new Polygon(), {fillStyle: Globals.groundColor, points:[
                new Vector2(i + 768, 0),
                new Vector2(i + 868, 0),
                new Vector2(i + 868, window.innerHeight/2),
                new Vector2(i + 768, window.innerHeight/2)
            ]})
        }
    }
}