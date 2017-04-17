/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {
        // fish
        let f = document.createElement("fish");
        document.body.appendChild(f);

        let fishx:number = Math.random() * window.innerWidth;
        let fishy:number = Math.random() * window.innerHeight;

        // we gebruiken hier left top omdat translate al in de animatie wordt gebruikt                
        f.style.left = fishx + "px";
        f.style.top = fishy + "px";

        // de kleur moet random worden
        f.style.webkitFilter = "hue-rotate(45deg)";
        f.style.filter = "hue-rotate(45deg)";

        // bubble
        let b = document.createElement("bubble");
        document.body.appendChild(b);
                        
        let startx:number = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});