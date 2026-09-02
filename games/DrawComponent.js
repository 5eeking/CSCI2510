class DrawComponent extends Component {
    draw(ctx){

        let position = this.gameObject.components[0].position

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        ctx.translate(position.x, position.y)

        ctx.lineTo(-40, -40)
        ctx.lineTo(40, -40)
        ctx.lineTo(40, 40)
        ctx.lineTo(-40, 40)
        
        ctx.fillStyle = "pink"
        ctx.fill()

        // Signaling that I'm done drawing.
        ctx.restore()
    }
}