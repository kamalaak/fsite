function typeText(element) {
  const text = element.dataset.text;
  const typingSpeed = parseInt(element.dataset.typingSpeed) || 100; // Default speed is 100 milliseconds
  let charIndex = 0;
  let isTypingDone = false;

  function animateText() {
    const currentText = text.substring(0, charIndex);
    element.textContent = currentText;

    charIndex++;

    if (charIndex <= text.length) {
      setTimeout(animateText, typingSpeed);
    } else {
      isTypingDone = true;
      // You can perform any additional actions here if needed
    }
  }

  animateText();
}

// Get all elements with the "typing-animation" class
const typingElements = document.querySelectorAll(".typing-animation");

// Loop through each element and start the typing animation
typingElements.forEach((element) => {
  element.textContent = ""; // Clear the text initially
  typeText(element);
});
