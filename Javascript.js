document.addEventListener("DOMContentLoaded", function () {

    const track = document.getElementById("sliderTrack");
    const slides = document.querySelectorAll(".slide");

    const previousButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    const dotsContainer = document.getElementById("dots");

    let currentIndex = 0;

    // Create indicator dots automatically
    slides.forEach(function (slide, index) {

        const dot = document.createElement("button");

        dot.classList.add("dot");
        dot.type = "button";

        dot.setAttribute(
            "aria-label",
            "Go to slide " + (index + 1)
        );

        dot.addEventListener("click", function () {

            currentIndex = index;
            moveSlider();

        });

        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // Move the slider
    function moveSlider() {

        track.style.transform =
            "translateX(-" + (currentIndex * 100) + "%)";

        updateDots();
    }

    // Update active indicator
    function updateDots() {

        dots.forEach(function (dot, index) {

            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }

        });
    }

    // Next button
    nextButton.addEventListener("click", function () {

        currentIndex++;

        // Loop back to first image
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        moveSlider();

    });

    // Previous button
    previousButton.addEventListener("click", function () {

        currentIndex--;

        // Loop back to last image
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        moveSlider();

    });

    // Display first image when page loads
    moveSlider();

});
