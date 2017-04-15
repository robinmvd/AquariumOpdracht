/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {
        
        // fish
        let f = document.createElement("fish");
        document.body.appendChild(f);

        f.style.left = "100px";
        f.style.top = "100px";

        f.style.webkitFilter = "hue-rotate(45deg)";
        f.style.filter = "hue-rotate(45deg)";


        // bubble
        let b = document.createElement("bubble");
        document.body.appendChild(b);
                        
        b.style.left = "250px";
        b.style.top = "350px";
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});