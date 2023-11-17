function setMenuClass(index) {
    const navMenus = document.querySelectorAll('nav li a');
    navMenus[index].classList.add('curr')
}

function checkPage() {
    let index;
    if (document.baseURI.includes('index')) {
        index = 0;
    }
    else if (document.baseURI.includes('gallery')) {
        index = 1;
    }
    else if (document.baseURI.includes('contact')) {
        index = 2;
    }
    else if (document.baseURI.includes('about')) {
        index = 3;
    }
    else if (document.baseURI.includes('subscribe')) {
        index = 4;
    }

    setMenuClass(index);
}

function slideImg(n) {
    imgIndex += n
    showImg();
}

function showImg() {
    const slides = document.querySelectorAll('.slideshow');
    for (slide of slides) {
        slide.style.display = 'none';
    }

    if (imgIndex > slides.length - 1) {
        imgIndex = 0;
    }
    else if (imgIndex < 0) {
        imgIndex = slides.length - 1;
    }
    slides[imgIndex].style.display = 'block';
}

function changeImgAuto() {
    imgIndex++;
    showImg();
    setTimeout(changeImgAuto, 3500);
}

function toggleNav() {
    const nav = document.querySelector('.nav-phone');
    nav.classList.toggle('active');
}

function chooseImagePage(index) {
    const h2 = document.querySelectorAll('.img-filter h2');
    const imgCollection = document.querySelectorAll('.img-collection');

    if (index === 0) {
        if (h2[0].classList.contains('active') == false) {
            h2[0].classList.toggle('active');
            h2[1].classList.toggle('active');
            imgCollection[0].classList.toggle('active');
            imgCollection[1].classList.toggle('active');
        }
    }
    else if (index === 1) {
        if (h2[1].classList.contains('active') == false) {
            h2[0].classList.toggle('active');
            h2[1].classList.toggle('active');
            imgCollection[0].classList.toggle('active');
            imgCollection[1].classList.toggle('active');
        }
    }
}

function subscribePage() {
    const subsForm = document.querySelector('#form');
    subsForm.style.display = 'none';
}

function showFormPage() {
    const subsForm = document.querySelector('#form');
    const subsPanel = document.querySelector('.subs-panel');

    subsPanel.style.display = 'none';
    subsForm.style.display = 'block';
}

checkPage();

let imgIndex = 0;
if (document.baseURI.includes('index')) {
    showImg(imgIndex);
    changeImgAuto();
}
else if (document.baseURI.includes('subscribe')) {
    subscribePage();
}

