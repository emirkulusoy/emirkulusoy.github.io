document.addEventListener('DOMContentLoaded', function() {
    // Animation logic here
    var pictures = document.querySelectorAll('.moving-picture');
    pictures.forEach(function(picture) {
        picture.style.animation = 'moveLeft 5s linear infinite'; // Adjust timing and animation as per your requirement
    });
});
