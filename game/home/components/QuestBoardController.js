class QuestBoardController extends Component {
    start() {
           
    }
    update() {
        let mainGameObject = GameObject.find("Main")
        if (mainGameObject) {
            let mainPosition = mainGameObject.transform.position
            let questPromptGameObject = GameObject.find("QuestPrompt")
            let questBoardPopupGameObject = GameObject.find("QuestBoardPopupGameObject")
            if (mainPosition.x < this.transform.position.x + 50 && mainPosition.x > this.transform.position.x - 50) {
                if (!questPromptGameObject && !questBoardPopupGameObject) {
                    instantiate(new QuestPromptGameObject(), new Vector2(window.innerWidth/2 - 55, window.innerHeight/2 - 40))
                }
            } else {
                if (questPromptGameObject) {
                    questPromptGameObject.destroy()
                }
                if (questBoardPopupGameObject) {
                    questBoardPopupGameObject.destroy()
                }
            }
        }
    }
}