class QuestPaperController extends Component {

   start() {
      // console.log("start")
      // this.selectableQuest = undefined
      // this.questLabel = undefined
      // this.difficultyLabel = undefined
      // this.rewardLabel = undefined
   }

   selectableQuest = undefined
   questLabel = undefined
   difficultyLabel = undefined
   rewardLabel = undefined
   
   update() {
      // console.log("update")
      // Creates quests and quest text for the paper.
      let questBoardPopupGameObject = GameObject.find("QuestBoardPopupGameObject")

      if (questBoardPopupGameObject) {

         if (Globals.selectableQuests.isEmpty() && Globals.createdQuests) {
            Globals.retrieveQuests = true
         }
         if (Globals.selectableQuests.count == 3 && !Globals.createdQuests) {
            Globals.createdQuests = true
         }

         if (!this.selectableQuest) {
            //console.log("working")
            if (!Globals.createdQuests && !Globals.retrieveQuests) {
               this.selectableQuest = instantiate(new QuestGameObject())
            }
            if (Globals.createdQuests && !Globals.retrieveQuests) {
               this.selectableQuest = Globals.selectableQuests.dequeue()
            }

            this.questLabel = instantiate(new QuestPaperTextGameObject(), this.transform.position.clone().minus(new Vector2(75, 0)))
            this.difficultyLabel = instantiate(new QuestPaperTextGameObject(), this.transform.position.clone().minus(new Vector2(75, 75)))
            this.rewardLabel = instantiate(new QuestPaperTextGameObject(), this.transform.position.clone().minus(new Vector2(75, -75)))
         }

         if (this.selectableQuest.getComponent(Quests).questText != undefined) {
            this.questLabel.getComponent(MultiLineTextLabel).text = this.selectableQuest.getComponent(Quests).questText
            this.difficultyLabel.getComponent(MultiLineTextLabel).text = this.selectableQuest.getComponent(Quests).difficultyText
            this.rewardLabel.getComponent(MultiLineTextLabel).text = this.selectableQuest.getComponent(Quests).rewardText
         }

      } else {
         // Destroys the quests and quest text when the quest board popup is destroyed.
         // if (this.selectableQuest) {
         //    this.selectableQuest.destroy()
         // }

         if (this.questLabel) {
            this.questLabel.destroy()
         }

         if (this.difficultyLabel) {
            this.difficultyLabel.destroy()
         }

         if (this.rewardLabel) {
            this.rewardLabel.destroy()
         }
         Globals.retrieveQuests = false
         Globals.selectableQuests.enqueue(this.selectableQuest)
         this.gameObject.destroy()
      }
   }

   onMouseOver() {
      if (Input.mouseButtonsDown.includes("     ")) {
         // Change scenes to an open world like scene.
         Globals.quests.push(this.selectableQuest)
         for (let i = 0; i < 2; i++) {
            Globals.selectableQuests.dequeue().destroy()
         }
         Globals.createdQuests = false
         Globals.retrieveQuests = false
      }
   }
}