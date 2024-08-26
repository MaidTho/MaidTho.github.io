function changeBackground() {
    const background = document.getElementById('background');
    const images = ['/Images/MainLogo1.png', '/Images/MainLogo2.png', '/Images/BlackBG.png']; // Add your image URLs here
    const randomImage = images[Math.floor(Math.random() * images.length)];
    background.style.backgroundImage = `url(${randomImage})`;
}