let gallery = [
    "img1.png",
    "tribute_page.png",
    "technical document page.png",
    "emptay.png",
]
let currentImg = 0;
const dot = document.getElementById("dot-selectors");
const display = document.getElementById("image-display");
const left = document.getElementById("arrow-left");
const right = document.getElementById("arrow-right");
const changeButton = document.getElementById("changer");
window.onload = () => {
        imgPreload(gallery);
        imgPreload(star);
        galleryInit(gallery);
    }
    //teehee
function imgPreload(images) {
    for (var i = 0; i < images.length; ++i) {
        var img = new Image();
        img.src = `./images/${images[i]}`;
    }
}

function galleryInit(array) {
    for (let i = 0; i < array.length; i++) {
        dot.insertAdjacentHTML('beforeend',
            `
            <div class="dot" onclick="choose(${i},gallery)" style="background-image:url(./images/${array[i]})"></div>
            `
        );
    }

}

function choose(image, array) {
    display.src = `./images/${array[image]}`;
    currentImg = image;
}

left.addEventListener('click', function() {
    currentImg -= 1;
    if (currentImg < 0) {
        currentImg = gallery.length - 1;
    }
    choose(currentImg, gallery);
});
right.addEventListener('click', function() {
    currentImg += 1;
    if (currentImg > gallery.length - 1) {
        currentImg = 0;
    }
    choose(currentImg, gallery);
});




//sidebar button
let sideb = false;
document.getElementById("star-nav").addEventListener('click', function() {
    document.getElementById("nav-main").style.display = (sideb ? "none" : "block");
    sideb = !sideb;
});

// automatically copy text 
const email = document.getElementById("email");
const phone = document.getElementById("phone-number");

function copyToClipboard(item) {
    window.getSelection().selectAllChildren(item);
    navigator.clipboard.writeText(item.innerHTML);
}

let star = [
    "stars1.gif",
    "stars2.gif",
    "stars3.gif",
    "stars4.gif",
    "stars5.gif",
    "stars6.gif",
    "stars7.gif",
    "stars8.gif",
    "Smallstars.gif"
]


const back = document.getElementById("back");
changeButton.addEventListener('click', e => {
    back.style.backgroundImage = `url(./images/${star[Math.floor(Math.random() * star.length)]})`;
})