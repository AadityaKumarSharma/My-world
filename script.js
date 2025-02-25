document.addEventListener("DOMContentLoaded", function () {
    const message = "Hey Mommy, I love you! ❤️";
    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            document.getElementById("message").innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    typeWriter();
});

document.getElementById("reveal-btn").addEventListener("click", function () {
    document.getElementById("hidden-message").style.display = "block";
});

// Floating Hearts
setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}, 500);
