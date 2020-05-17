class Bubble {

    div: HTMLElement
    element: HTMLElement

    constructor() {

        console.log("Blub... blub...")
        this.element = document.createElement("bubble")
        this.element.addEventListener("click", () => this.popBubble())

        this.changePosition()

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)
    }

    changePosition() {
        let x = Math.random() * (window.innerWidth - this.element.clientWidth)
        let y = Math.random() * (window.innerHeight - this.element.clientHeight)
        this.element.style.transform = `translate(${x}px, ${y}px)`
    }

    popBubble() {
        this.element.remove()
        console.log("Plop!")
    }
}