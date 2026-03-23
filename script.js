// Function to handle scroll reveal animations
function reveal() {
    var reveals = document.querySelectorAll(".reveal, .reveal-delay");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// Trigger reveal on load
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(reveal, 100);
});
