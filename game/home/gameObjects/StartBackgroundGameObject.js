class StartBackgroundGameObject extends GameObject {
   constructor() {
       super("StartBackgroundGameObject", [], "background")
       this.addComponent(new Polygon(), {fillStyle: "blue", points:Assets.square})
       // this.addComponent(new StartBackgroundController())
       this.transform.scale = new Vector2(2000, 2000)
   }
}