const iframe = document.getElementById("iframe");
        const text = document.getElementById("text");
        const fadeInDuration = 800;
    
        function fadeIn(el, duration) {
            el.style.opacity = 0;
            let step = 10 / duration,
                opacity = 0;
            function next() {
                if (opacity >= 1) { return; }
                opacity += step;
                el.style.opacity = opacity;
                setTimeout(next, 10);
            }
            next();
        }
    
        iframe.addEventListener("load", () => {
            fadeIn(iframe, fadeInDuration);
            fadeIn(text, fadeInDuration);
        });