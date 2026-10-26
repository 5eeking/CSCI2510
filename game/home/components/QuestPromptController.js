class QuestPromptController extends Component {
    update() {
        // Creates a quest board popup and quest papers when the interact key is pressed. Also destroys interact prompt.
        let questBoardPopupGameObject = GameObject.find("QuestBoardPopupGameObject")

        if (Input.keysDown.includes("KeyE") && !questBoardPopupGameObject) {
            instantiate(new QuestBoardPopupGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2 - 200, window.innerHeight/2 - 150))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2 + 150))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2 + 250, window.innerHeight/2 - 100))
            this.gameObject.destroy()
        }
    }
}