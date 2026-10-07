class QuestPromptController extends Component {
    update() {
        if (Input.keysDown.includes("KeyE")) {
            instantiate(new QuestBoardPopupGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2 - 200, window.innerHeight/2 - 150))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2 + 150))
            instantiate(new QuestPaperGameObject(), new Vector2(window.innerWidth/2 + 250, window.innerHeight/2 - 100))
            this.gameObject.destroy()
        }
    }
}