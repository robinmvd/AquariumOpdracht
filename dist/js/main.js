var Bubble = (function () {
    function Bubble() {
    }
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
    }
    return Fish;
}());
var Game = (function () {
    function Game() {
        var f = document.createElement("fish");
        document.body.appendChild(f);
        f.style.left = "100px";
        f.style.top = "100px";
        f.style.webkitFilter = "hue-rotate(45deg)";
        f.style.filter = "hue-rotate(45deg)";
        var b = document.createElement("bubble");
        document.body.appendChild(b);
        b.style.left = "250px";
        b.style.top = "350px";
    }
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map