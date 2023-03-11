// get page elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const images = document.querySelectorAll('#main-container img');

// counter -- keeps track of which image is showing
let currentImage = 0;

//  Event Listeners to btns
prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);

// Functions: prevImage, nextImage
function prevImage() {
    // hide current image
    images[currentImage].classList.remove('active');
    // decrement currentImage counter
    currentImage--;

    // if currentImage is less than 0, set it to the last image
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    // show the previous image
    images[currentImage].classList.add('active');
}

function nextImage() {
    // hide current image
    images[currentImage].classList.remove('active');
    // increment currentImage counter
    currentImage++;

    // if currentImage is greater than the last image, set it to 0
    if (currentImage >= images.length) {
        currentImage = 0;
    }

    // show the next image (new currentImage)
    images[currentImage].classList.add('active');
}