class BetterLaserGameObject extends GameObject {
   constructor() {
       super("BetterLaserGameObject", ["Better"], "projectiles")
       this.addComponent(new Polygon(), {fillStyle: "purple", points:Assets.triangle})
       this.addComponent(new BetterLaserController())
       this.addComponent(new Collider(), {isTrigger: true})
       this.transform.scale = new Vector2(1, 1)
   }
}