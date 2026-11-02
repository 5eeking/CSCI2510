class BetterLaserGameObject extends GameObject {
   constructor() {
       super("BetterLaserGameObject", [], "projectiles")
       this.addComponent(new Polygon(), {fillStyle: "purple", points:Assets.triangle})
       this.addComponent(new BetterLaserController())
       this.transform.scale = new Vector2(1, 1)
   }
}