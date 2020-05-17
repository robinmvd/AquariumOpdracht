class Fish {

    div: HTMLElement
    element: HTMLElement
    
    constructor() {
        
        console.log("Fish was created!")
        this.element = document.createElement("fish")
        this.element.addEventListener("click", () => this.killFish())

        let game = document.getElementsByTagName("game")[0]

        game.appendChild(this.element)

        this.changeColor()
        this.changePosition()
    }

    changeColor() {
        let color = Math.random() * 360
        this.element.style.filter = `hue-rotate(${color}deg)`
        
    }

    changePosition() {
        let x = Math.random() * (window.innerWidth - this.element.clientWidth)
        let y = Math.random() * (window.innerHeight - this.element.clientHeight)
        this.element.style.transform = `translate(${x}px, ${y}px)`
    }

    killFish(){
        this.element.classList.add("dead")
        console.log("Aargh!")
    }
}