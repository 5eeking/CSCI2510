class GroundPolygon extends Component {
    draw(ctx){

        let position = this.transform.position
        //let dashCooldown = this.gameObject.components[0].dashCooldown

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        ctx.translate(position.x, position.y)

        ctx.beginPath()

        ctx.lineTo(-window.innerWidth/2, 0)
        ctx.lineTo(window.innerWidth/2, 0)
        ctx.lineTo(window.innerWidth/2, window.innerHeight/2)
        ctx.lineTo(-window.innerWidth/2, window.innerHeight/2)
        
        ctx.fillStyle = "pink"
        ctx.fill()

        // Signaling that I'm done drawing.
        ctx.restore()
    }
}