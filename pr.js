/* ================================
   CURRENT YEAR
================================ */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ================================
   NAVIGATION ACTIVE LINK
================================ */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================================
   SCROLL ANIMATION
================================ */

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-card, .achievement-card, .education-card"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function(card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});