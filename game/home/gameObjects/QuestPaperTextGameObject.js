class QuestPaperTextGameObject extends GameObject {
   constructor() {
       super("QuestPaperTextGameObject", [], "UI")
       this.addComponent(new MultiLineTextLabel(), {fillStyle: "white", font: "12px Times", maxLength: 75})
       this.transform.scale = new Vector2(1, 1)
   }
}