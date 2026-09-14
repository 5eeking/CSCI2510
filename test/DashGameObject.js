class DashGameObject extends GameObject {
    constructor() {
        super()
        let position = this.transform.position
        if (position.x == position.x - window.innerWidth/2 - 50) {
            this.addComponent(new Polygon(), {fillStyle:"gray", points:[
                new Vector2(position.x > window.innerWidth/2 - 50 ? position.x - (position.x - window.innerWidth/2 - 50) : position.x , -5),
                new Vector2(position.x > window.innerWidth/2 - 50 ? position.x - (position.x - window.innerWidth/2 - 50) + 100 : position.x + 100, -5),
                new Vector2(position.x > window.innerWidth/2 - 50 ? position.x - (position.x - window.innerWidth/2 - 50) + 100 : position.x + 100, 5),
                new Vector2(position.x > window.innerWidth/2 - 50 ? position.x - (position.x - window.innerWidth/2 - 50) : position.x , 5)
            ]})
        } else {
            this.addComponent(new DashController())
            this.addComponent(new Polygon(), {fillStyle:"white", points:[
                new Vector2(position.x > window.innerWidth/2 - 48 ? position.x - (position.x - window.innerWidth/2 - 48) + 2 : position.x + 2, -3),
                new Vector2(position.x + 2, -3),
                new Vector2(position.x + 2, 3),
                new Vector2(position.x > window.innerWidth/2 - 48 ? position.x - (position.x - window.innerWidth/2 - 48) + 2 : position.x + 2, 3),
            ]})
        }
    }
}