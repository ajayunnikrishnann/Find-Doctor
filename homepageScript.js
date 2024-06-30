var slideIndex = 0;
        showSlides(); // call to the showSlides function to start the slideshow

        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides"); // Get all elements with the class name "mySlides"
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"; // Hide all slides
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1} // Reset slideIndex to 1 if it exceeds the number of slides
            slides[slideIndex-1].style.display = "block"; // Display the current slide
            setTimeout(showSlides, 4000); // Change slide every 4 seconds but changed as 1.5 seconds in css
        }

        function toggleMenu() {
            var nav = document.querySelector('.header nav ul'); // Get the navigation menu
            nav.classList.toggle('show'); // Toggle the 'show' class to display or hide the menu
        }