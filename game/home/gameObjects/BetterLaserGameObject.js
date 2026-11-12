class BetterLaserGameObject extends GameObject {
   constructor() {
       super("BetterLaserGameObject", ["Better"], "projectiles")
       this.addComponent(new Polygon(), {fillStyle: "purple", points:Assets.triangle})
       this.addComponent(new BetterLaserController())
       this.addComponent(new Collider(), {isTrigger: true})
       this.addComponent(new RigidBody())
       this.transform.scale = new Vector2(10, 10)
   }
}