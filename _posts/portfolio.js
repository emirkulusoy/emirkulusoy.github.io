window.onload = function() {
  const images = document.querySelectorAll('.image');
  let offset = 0;

  function moveImages() {
    offset -= 100; // Move images 100% to the left
    images.forEach(image => {
      image.style.left = `${offset}%`;
    });
    setTimeout(moveImages, 5000); // Adjust delay between animations (5000ms = 5 seconds)
  }

  moveImages();
};
