class QuestPromptController extends Component {
    start() {
        
    }
    update() {
        if (Input.keysDown.includes("KeyE")) {
            instantiate(new QuestBoardPopupGameObject(), new Vector2(window.innerWidth/2, window.innerHeight/2))
            this.gameObject.destroy()
        }
    }
}