// Add event listeners to thumbnails
const thumbnails = document.querySelectorAll('.preview');
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', upDate);
    thumbnail.addEventListener('mouseout', undo);
});

// upDate function
function upDate(event) {
    const previewPic = event.target;
    console.log('Alt text:', previewPic.alt);
    console.log('Image source:', previewPic.src);

    // Update text and background image
    document.getElementById('image').innerText = previewPic.alt;
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
}

// undo function
function undo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerText = "Hover over an image below to display here.";
}