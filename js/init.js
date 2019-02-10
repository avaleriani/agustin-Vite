var scss = require('../scss/main.scss');
//var linesDrawer = require('../js/lines-drawer.js');
var app = require('../js/application.js');
//var scrollAnimation = require('../js/scroll-animation.js'); //todo: hacer
var workViewer = require('../js/work-viewer.js');
var animate = require('../js/animate.js');

document.addEventListener("DOMContentLoaded", function () {
    app.loadApplication();
    app.svgInjector();
    workViewer.init();
    animate.scrollArrow();
    if (window.innerWidth == '1920') { //todo:: fix mobile
        // TODO:: ver como hacer para que las lineas sean mobile, supongo que multiplicando por un numero magico que de 0 en la resolucion que lo
        // hice = window.innerWidth * 1920
        //          linesDrawer.createAllLine
        // s('#lines-container');
        //          linesDrawer.scrollAnimate();
        //l     inesDrawer.mouseCoordenatesOnTitle();
    }
    app.worksFilter();
    animate.typingEffect();
    animate.hideMoreBtnMobile();
    animate.inputAnimation();
    animate.rippleEffect();
    animate.emailSend();
    animate.hexagonRotate();

    document.getElementById("year").innerHTML = String(new Date().getFullYear());
});