// dainamic menu
let barIcon = document.getElementById("barOpen");
let barMenu = document.querySelector(".barMenu");
let landingOverlay = document.querySelector(".landing .overlay");
barIcon.onclick = function(){
    barMenu.style.left = ("0");
    landingOverlay.style.zIndex = ("5");
    landingOverlay.style.opacity = ("1");
    document.body.style.height = ('100vh')
    document.body.style.overflow = ('hidden')
};

let closeMenuIcon = document.querySelector('.barMenu .icon i');
closeMenuIcon.onclick = function(){
    barMenu.style.left = ("-100%");
    landingOverlay.style.zIndex = ("-1");
    landingOverlay.style.opacity = ("0");
    document.body.style.overflow = ('unset')
};
landingOverlay.onclick = function(){
    barMenu.style.left = ("-100%");
    landingOverlay.style.zIndex = ("-1");
    landingOverlay.style.opacity = ("0");
    document.body.style.overflow = ('unset');
};

// change images
let changeImageIcon = document.getElementById('changeImages');
let imageChange = document.querySelector(".mainSection .image");
let zadLocal = window.localStorage.getItem("zad");
let zad = Number(zadLocal);
let imgsArray = ["woman.jpg", "woman2.jpg", "woman3.jpg", "woman4.jpg", "woman5.jpg", "woman6.jpg"];

imageChange.style.backgroundImage = `url("images/${imgsArray[zad]}")`;
changeImageIcon.onclick = function (){
    zad += 1;
    if (zad === imgsArray.length) {
        zad = 0;
    }
    imageChange.style.backgroundImage = `url("images/${imgsArray[zad]}")`;
    window.localStorage.setItem("zad", `${zad}`)
}

// click on images