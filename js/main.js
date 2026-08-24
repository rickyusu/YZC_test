// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const topMenu = document.querySelector(".inspire-menu");

if (menuToggle && topMenu) {
    menuToggle.addEventListener("click", () => {
        const isOpen = topMenu.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });

    topMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            topMenu.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}


// Banner slideshow
/*const banners = [
    "images/practice.jpg",
    "images/banner1.png",
    "images/banner2.png"
];

const hero = document.querySelector(".hero-banner");

if (hero) {
    let current = 0;

    hero.style.setProperty(
        "--banner-image",
        `url('${banners[current]}')`
    );

    setInterval(() => {
        current = (current + 1) % banners.length;

        hero.style.setProperty(
            "--banner-image",
            `url('${banners[current]}')`
        );
    }, 2000);
}*/

// Banner slideshow
const banners = [
    "images/practice.jpg",
    "images/banner1.png",
    "images/banner2.png",
    "images/banner3.png",
    "images/banner4.jpg",
    "images/banner5.jpg",
    "images/banner6.jpg",
    "images/banner7.jpg"
];

const hero = document.querySelector(".hero-banner");

if (hero && banners.length > 0) {
    let current = 0;

    // Preload every image before starting the slideshow
    const preloadPromises = banners.map(src => {
        return new Promise(resolve => {
            const image = new Image();

            image.onload = resolve;
            image.onerror = resolve;
            image.src = src;
        });
    });

    Promise.all(preloadPromises).then(() => {
        hero.style.setProperty(
            "--banner-image",
            `url("${banners[current]}")`
        );

        if (banners.length > 1) {
            setInterval(() => {
                current = (current + 1) % banners.length;

                hero.style.setProperty(
                    "--banner-image",
                    `url("${banners[current]}")`
                );
            }, 4000);
        }
    });
}
