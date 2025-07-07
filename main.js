document.addEventListener("DOMContentLoaded", function () {
    const workPage = document.querySelector(".work-page");
    const workLink = document.querySelector(".nav-text a:nth-child(1)"); // First nav item
    const closeButton = document.querySelector(".close-work");

    // Toggle work page
    workLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent link from reloading the page
        workPage.classList.toggle("active");
    });

    // Close work page
    closeButton.addEventListener("click", function () {
        workPage.classList.remove("active");
    });
});

