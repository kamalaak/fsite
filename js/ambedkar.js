// your-script.js

// Initialize Konva
const stage = new Konva.Stage({
    container: 'container',
    width: 400,
    height: 600,
  });
  
  const layer = new Konva.Layer();
  stage.add(layer);
  
  // Create an image of Ambedkar
  const ambedkarImage = new Konva.Image({
    x: 100,
    y: 100,
    width: 200,
    height: 300,
  });
  
  // Replace 'ambedkar.jpg' with the actual path to your Ambedkar image
  const imageObj = new Image();
  imageObj.onload = function () {
    ambedkarImage.image(imageObj);
    layer.batchDraw();
  };
  imageObj.src = '\image\ambe.jpeg';
  
  // Add the image to the layer
  layer.add(ambedkarImage);
  
  // Draw the layer
  layer.draw();
  