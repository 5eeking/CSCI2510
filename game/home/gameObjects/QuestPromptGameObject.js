class QuestPromptGameObject extends GameObject {
   constructor() {
       super("QuestPrompt", [], "UI")
       this.addComponent(new TextLabel(), {fillStyle: "white", text:"Press \"E\" to interact", font: "15px Times"})
       this.addComponent(new QuestPromptController())
   }
}