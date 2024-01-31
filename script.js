document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - document.querySelector("header").offsetHeight,
            behavior: "smooth"
        });
    }

    const nameElement = document.querySelector("#home h1");
    const blinkerElement = document.createElement("span");
    blinkerElement.classList.add("blinker");
    nameElement.appendChild(blinkerElement);

    const nameText = "Hare Krishna";
    let index = 0;
    let isDeleting = false;

    function type() {
        if (!isDeleting) {
            nameElement.textContent = nameText.slice(0, index);
            index++;
        } else {
            nameElement.textContent = nameText.slice(0, index);
            index--;

            if (index === 0) {
                isDeleting = false;
            }
        }

        nameElement.appendChild(blinkerElement);

        if (index <= nameText.length && !isDeleting) {
            setTimeout(type, 200); // Typing speed
        } else {
            isDeleting = true;
            setTimeout(type, 100); // Deletion speed
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.getElementById("about");
    const leftLine = document.querySelector(".left-line");
    const rightLine = document.querySelector(".right-line");

    window.addEventListener("scroll", function () {
        const distanceToTop = aboutSection.getBoundingClientRect().top;

        if (distanceToTop < window.innerHeight / 2) {
            leftLine.classList.add("faded");
            rightLine.classList.add("faded");
        } else {
            leftLine.classList.remove("faded");
            rightLine.classList.remove("faded");
        }
    });

    const cards = document.querySelectorAll(".card");

    window.addEventListener("scroll", function () {
        const distanceToTop = aboutSection.getBoundingClientRect().top;

        if (distanceToTop < window.innerHeight / 2) {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add("show");
                }, index * 500); 
            });
        }
    });

});


