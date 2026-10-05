class QuestBoardGameObject extends GameObject {
   constructor() {
       super("QeustBoard", [], "foreground")
       this.addComponent(new Polygon(), {fillStyle: "sienna", points:Assets.questBoard})
       this.addComponent(new Polygon(), {fillStyle: "white", points: [
        new Vector2(-25, -25),
        new Vector2(-35, -25),
        new Vector2(-35, -10),
        new Vector2(-25, -10),
       ]})
       this.addComponent(new Polygon(), {fillStyle: "red", points: [
        new Vector2(-5, 10),
        new Vector2(5, 10),
        new Vector2(5, 25),
        new Vector2(-5, 25),
       ]})
       this.addComponent(new Polygon(), {fillStyle: "blue", points: [
        new Vector2(25, -10),
        new Vector2(35, -10),
        new Vector2(35, 5),
        new Vector2(25, 5),
       ]})
       this.addComponent(new QuestBoardController())
       this.transform.scale = new Vector2(2, 2)
   }
}