class QuestPaperController extends Component {
   start() {
      this.selectableQuest = undefined
      this.questLabel = undefined
   }
   update() {
      // Creates quests and quest text for the paper.
      let questBoardPopupGameObject = GameObject.find("QuestBoardPopupGameObject")

      if (questBoardPopupGameObject) {

         if (!this.selectableQuest) {
            this.selectableQuest = instantiate(new QuestGameObject())
            this.questLabel = instantiate(new QuestPaperTextGameObject(), this.transform.position.clone())
            this.questLabel.transform.position.x -= 75
         }

         if (this.selectableQuest.getComponent(Quests).questText != undefined) {
            this.questLabel.getComponent(MultiLineTextLabel).text = this.selectableQuest.getComponent(Quests).questText
         }

      } else {
         // Destroys the quests and quest text when the quest board popup is destroyed.
         if (this.selectableQuest) {
            console.log("working")
            this.selectableQuest.destroy()
         }

         if (this.questLabel) {
            console.log("working")
            this.questLabel.destroy()
         }

         this.gameObject.destroy()
      }
   }
}