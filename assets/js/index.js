const iframe = document.getElementById("iframe");
const text = document.querySelectorAll(".text");;
const fadeInDuration = 800;

function fadeIn(el, duration) {
    el.style.opacity = 0;
    el.style.display = 'block'; // In case it's hidden
    let start = null;

    function step(timestamp) {
        if (!start) start = timestamp;
        let progress = timestamp - start;
        let opacity = Math.min(progress / duration, 1);
        el.style.opacity = opacity;
        if (progress < duration) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

iframe.addEventListener("load", () => {
    fadeIn(iframe, fadeInDuration);
    text.forEach(el => {
        fadeIn(el, fadeInDuration);
    });
});