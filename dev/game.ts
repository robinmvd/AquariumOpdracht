class Game {
        
    constructor() {
        console.log("Game was created!")

        let fish : Fish = new Fish()

        let bubble : Bubble = new Bubble()

        let pineapple : Pineapple = new Pineapple()
    }
} 

window.addEventListener("load", () => new Game())