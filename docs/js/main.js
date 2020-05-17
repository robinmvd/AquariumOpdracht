"use strict";
var Bubble = (function () {
    function Bubble() {
        var _this = this;
        console.log("Blub... blub...");
        this.element = document.createElement("bubble");
        this.element.addEventListener("click", function () { return _this.popBubble(); });
        this.changePosition();
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    Bubble.prototype.changePosition = function () {
        var x = Math.random() * (window.innerWidth - this.element.clientWidth);
        var y = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    Bubble.prototype.popBubble = function () {
        this.element.remove();
        console.log("Plop!");
    };
    return Bubble;
}());
var Fish = (function () {
    function Fish() {
        var _this = this;
        console.log("Fish was created!");
        this.element = document.createElement("fish");
        this.element.addEventListener("click", function () { return _this.killFish(); });
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
        this.changeColor();
        this.changePosition();
    }
    Fish.prototype.changeColor = function () {
        var color = Math.random() * 360;
        this.element.style.filter = "hue-rotate(" + color + "deg)";
    };
    Fish.prototype.changePosition = function () {
        var x = Math.random() * (window.innerWidth - this.element.clientWidth);
        var y = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    Fish.prototype.killFish = function () {
        this.element.classList.add("dead");
        console.log("Aargh!");
    };
    return Fish;
}());
var Game = (function () {
    function Game() {
        console.log("Game was created!");
        var fish = new Fish();
        var bubble = new Bubble();
        var pineapple = new Pineapple();
    }
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
var Pineapple = (function () {
    function Pineapple() {
        console.log("Hallo!");
        this.element = document.createElement("pineapple");
        this.changePosition();
        var game = document.getElementsByTagName("game")[0];
        game.appendChild(this.element);
    }
    Pineapple.prototype.changePosition = function () {
        var x = Math.random() * (window.innerWidth - this.element.clientWidth);
        var y = Math.random() * (window.innerHeight - this.element.clientHeight);
        this.element.style.transform = "translate(" + x + "px, " + y + "px)";
    };
    return Pineapple;
}());
//# sourceMappingURL=main.js.map