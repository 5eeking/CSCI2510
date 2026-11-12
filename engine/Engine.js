class Engine {
    static canvas

    static ctx

    static layers = ["default", "UI"]

    static aspectRatio

    static cameraWidthInWorldSpace

    static letterBoxingWidth = 0
    static letterBoxingHeight = 0

    static start(nextScene, settings) {
        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        addEventListener("mousedown", Input.mousedown)
        addEventListener("mouseup", Input.mouseup)

        addEventListener("mousemove", Input.mouseMove)

        addEventListener("contextmenu", e=>e.preventDefault())

        SceneManager.nextScene = nextScene

        if (settings) {
            Engine.layers = settings.layers
            Engine.aspectRatio = settings.aspectRatio
            Engine.cameraWidthInWorldSpace = settings.cameraWidthInWorldSpace
        }

        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop(){

        SceneManager.update()

        Engine.update()
        Engine.draw()

        Time.update()
        Input.update()

        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
       // update()
       SceneManager.currentScene.start()
       SceneManager.currentScene.update()
    }

    static draw() {
        // Expand the size of the canvas.
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        //draw(Engine.ctx)
        SceneManager.currentScene.draw(Engine.ctx)
    }
}