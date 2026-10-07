class Polygon extends Component {

    fillStyle = "magenta"
    points = []

    draw(ctx){
        let position = this.transform.position

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        // ctx.translate(position.x, position.y)
        // ctx.rotate(this.transform.rotation)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)

        ctx.beginPath()

        for (const point of this.points) {
            ctx.lineTo(point.x, point.y)
        }
        
        ctx.fillStyle = this.fillStyle
        ctx.fill()

        // Signaling that I'm done drawing.
        ctx.restore()
    }
}