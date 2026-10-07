class QuestPaperGameObject extends GameObject {
   constructor() {
       super("QuestPaperGameObject", ["QuestPaper"], "UI")
       this.addComponent(new Polygon(), {fillStyle: "goldenrod", points:Assets.square})
       this.addComponent(new QuestPaperController())
       this.transform.scale = new Vector2(4, 6)
   }
}