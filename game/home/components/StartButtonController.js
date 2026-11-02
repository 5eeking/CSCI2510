class StartButtonController extends Component {

    buttonHighlightGameObject = undefined

   onMouseOver() {
        console.log(Input.mouseButtonsDown)
        if (true) { // Make this the Input.mouseButtonsDown.includes("Button")
            SceneManager.loadScene(Level01)
            SceneManager.loadScene(GenericLevel, true)
            this.buttonHighlightGameObject = instantiate(new StartButtonHighlightGameObject(), this.transform.position.clone())
        }
   }
}