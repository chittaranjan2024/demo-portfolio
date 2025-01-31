document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio Loaded Successfully!");

    // Smooth Scroll for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute("href").substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
        });
    });
});
