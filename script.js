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




document.addEventListener("DOMContentLoaded", function () {
    const firstodo = document.querySelector(".odo1");
    const secondodo = document.querySelector(".odo2");
    const thirdodo = document.querySelector(".odo3");

    const od1 = new Odometer({
        el: firstodo,
    })
    // firstodo.innerHTML = 50;

    const od2 = new Odometer({
        el: secondodo,
    })
    // secondodo.innerHTML = 1000;

    const od3 = new Odometer({
        el: thirdodo,
    })
    // thirdodo.innerHTML = 100000;
    window.addEventListener("scroll", () => {
        let activated = false;
        const elem = document.querySelector("#odo")
        const dist = elem.getBoundingClientRect().top;
        if (dist<window.innerHeight/2  && activated === false) {
            console.log("hi");
            firstodo.innerHTML = 50;
            secondodo.innerHTML = 1000;
            thirdodo.innerHTML = 100000;
        }
        activated = true;
    });
});
