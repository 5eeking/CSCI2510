class TextLabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"

    draw(ctx){

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.beginPath()


        
        ctx.fillStyle = this.fillStyle
        ctx.fillText(this.text, 0, 0)

        // Signaling that I'm done drawing.
        ctx.restore()
    }
}