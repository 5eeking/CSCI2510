class StartButtonGameObject extends GameObject {
   constructor() {
       super("StartButtonGameObject", [], "UI")
       this.addComponent(new Polygon(), {fillStyle: "black", points:Assets.square})
       this.addComponent(new StartButtonController())
       this.addComponent(new Collider())
       //this.Collider.points([new Vector2(-window.innerWidth/2 - 20, -window.innerHeight/2 - 20), new Vector2(-window.innerWidth/2 + 20, -window.innerHeight/2 - 20), new Vector2(-window.innerWidth/2 + 20, -window.innerHeight/2 + 20), new Vector2(-window.innerWidth/2 - 20, -window.innerHeight/2 + 20)])
       this.transform.scale = new Vector2(4, 2)
   }
}