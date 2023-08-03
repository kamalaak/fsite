const canvas = document.getElementById("ambedkarCanvas");
const ctx = canvas.getContext("2d");

// Load the image of Dr. B. R. Ambedkar
const image = new Image();
image.src = "/image/ambe.jpeg";

// Wait for the image to load and then draw it on the canvas
image.onload = function () {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

// Global variables
let img;
const canvasWidth = 400;
const canvasHeight = 400;

// Load the image and prepare the canvas
function preload() {
  img = loadImage('/image/ambe.jpeg', () => {
    resizeCanvas(canvasWidth, canvasHeight);
  });
}

// Setup function to create canvas and draw image
function setup() {
  createCanvas(canvasWidth, canvasHeight).parent('warliCanvas');
  image(img, 0, 0, width, height);
}

// Function to convert the image to Warli art-like representation (you'll need to implement the conversion logic)
function convertToWarliArt() {
  // Your image to Warli art conversion code here
  // You can use image processing techniques, such as edge detection, simplification, and mapping to Warli patterns
}

// Handle image loading when user selects a file
document.getElementById('imageInput').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    img = loadImage(URL.createObjectURL(file), () => {
      resizeCanvas(canvasWidth, canvasHeight);
      setup();
    });
  }
});
