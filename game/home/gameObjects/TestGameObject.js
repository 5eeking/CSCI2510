class TestGameObject extends GameObject {
   constructor() {
       super("TestGameObject")
       //this.addComponent(new Polygon(), {fillStyle: "red", points:Assets.triangle})
       this.addComponent(new TestController())
       this.transform.scale = new Vector2(1, 1)
   }
}