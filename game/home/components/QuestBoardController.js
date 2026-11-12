class QuestBoardController extends Component {

    questPromptGameObject
    questBoardPopupGameObject

    update() {
        //Globals.quests.printQueue()
        // Creates an interact prompt when the player is in front of the quest board.
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {

            let mainPosition = mainGameObject.transform.position
            this.questPromptGameObject = GameObject.find("QuestPrompt")
            this.questBoardPopupGameObject = GameObject.find("QuestBoardPopupGameObject")

            if (!(mainPosition.x < this.transform.position.x + 100 && mainPosition.x > this.transform.position.x - 100)) {

                // Destroys the prompt and/or quest board popup if they exist when the player moves away from the quest board.
                if (this.questPromptGameObject) {
                    this.questPromptGameObject.destroy()
                }
                if (this.questBoardPopupGameObject) {
                    // let questPaperGameObjects = GameObject.findGameObjectsWithTag("QuestPaper")
                    // for (const gameObject of questPaperGameObjects) {
                    //     gameObject.destroy()
                    // }
                    this.questBoardPopupGameObject.destroy()
                }

            }
        }
    }

    onTriggerStay(other) {
        if (other.name == "Main" && !this.questPromptGameObject && !this.questBoardPopupGameObject) {
            instantiate(new QuestPromptGameObject(), new Vector2(window.innerWidth/2 - 55, window.innerHeight/2 - 40))
        }
    }
}