class MultiTextLabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"

    font = "10px Arial" // Sizepx Font

    textArray = []
    maxLength = 100
    textAquired = false

    draw(ctx){
        if (!this.textAquired) {
            this.text += " "
            this.textArray = this.separateText(ctx)
            this.textAquired = true
        }

        // Signaling to the context that I'm going to draw something.
        ctx.save()

        // Set the center of our object.
        // ctx.translate(this.transform.position.x, this.transform.position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        let textHeight = Number(this.font.split(" ")[0].replace("px", "")) * 1.5
        let lineHeight = 0

        for (const index in this.textArray) {
            ctx.beginPath()
        
            ctx.fillStyle = this.fillStyle

            ctx.font = this.font
            ctx.fillText(this.textArray[index], 0, lineHeight)
            lineHeight += textHeight
        }

        // Signaling that I'm done drawing.
        ctx.restore()
    }

    separateText(ctx) {
        let finalArray = []
        let splitText = this.text.split(" ")
        let tempText = ""
        for (const wordNum of splitText.keys()) {
            let index = 0
            if (this.text != "") {
                for (const letter of this.text) {
                    index += 1
                    if (letter != " ") {
                        tempText += letter
                    } else {
                        if (ctx.measureText(tempText).width < this.maxLength && index != this.text.length) {
                            tempText += letter
                            continue
                        } else {
                            finalArray.push(tempText)
                            this.text = this.text.replace(tempText + " ", "")
                            tempText = ""
                            break
                        }
                    }
                }
            }
        }
        return finalArray
    }
}