---
layout: post
title: Portfolio
---

<div id="image-container">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page1.png" alt="Linux tool for analyzing WiFi performance on end-user devices I">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page2.png" alt="Linux tool for analyzing WiFi performance on end-user devices II">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page3.png" alt="Utilizing GPS to obtain position data for an outdoor tests">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page4.png" alt="Linux tool for 5G/LTE performance via Cradlepoint R1900 Modem">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page5.png" alt="Image Classification by TensorFlow/Keras CNN Model - I">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page6.png" alt="Image Classification by TensorFlow/Keras CNN Model - II">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page7.png" alt="Data Scraping from eCommerce/Amazon Using BeautifulSoup - I">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page8.png" alt="Data Scraping from eCommerce/Amazon Using BeautifulSoup - II">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page9.png" alt="Data Scraping from eCommerce/Amazon Using BeautifulSoup - III">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page10.png" alt="Data Visualization via matplotlib, seaborn, pandas libraries">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page11.png" alt="Web-based reporting tool over Google Apps Script platform">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page12.png" alt="Example Ericsson Kget file parser via Python">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page13.png" alt="Scripting on Ericsson Amos language">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page14.png" alt="Raspberry Pi and Testing Applications">
  <img class="image" src="https://raw.githubusercontent.com/emirkulusoy/emirkulusoy.github.io/main/_posts/_images/_page15.png" alt="K8s Google Cloud Trials ">
  <!-- Add more images as needed -->
</div>

<script>
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
</script>