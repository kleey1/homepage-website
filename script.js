const initSlider = () => {
    const imageList = document.querySelector(".carousel .carousel-list");
    console.log(imageList); // Verify this is not null
    const slideButtons = document.querySelectorAll(".carousel .slide-button");
    console.log(slideButtons); // Verify this is a NodeList with length 2

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });
};

window.addEventListener("load", initSlider);