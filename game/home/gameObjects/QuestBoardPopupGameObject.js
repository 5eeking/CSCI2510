class QuestBoardPopupGameObject extends GameObject {
   constructor() {
       super("QuestBoardPopupGameObject", [], "UI")
       this.addComponent(new Polygon(), {fillStyle: "sienna", points:Assets.square})
       //this.addComponent(new QuestBoardPopupController())
       this.transform.scale = new Vector2(20, 15)
   }
}