const images = ['clear.jpg', 'cloudy.jpg', 'rainy.jpg', 'snow.jpg'];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement('img');
bgImage.src = `../background-images/${chosenImage}`;
document.body.appendChild(bgImage);
