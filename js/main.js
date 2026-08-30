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
    "images/banner7.jpg",
    "images/banner8.jpg",
    "images/banner9.jpg"
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

const commonHeaderCode = `


 <header id="home" class="inspire-header">
    <link rel="stylesheet" href="article-reference.css">
    <div class="inspire-nav">
    <a class="inspire-brand" href="https://www.neijin-qigong.com/" aria-label="German">
      <img class="inspire-seal" src="images/yzc-logo.png" alt="Logo">
    </a>
    <a class="inspire-brand" >
      <img class="inspire-wordmark" src="images/yzc_cnlogo.png" alt="">
    </a>
    <a class="inspire-brand" href="index2.html" aria-label="Chinese">
      <img class="inspire-seal" src="images/yzc-stamp.gif" alt="Chinese">
    </a>

    <button class="menu-toggle" type="button" aria-label="打开菜单" aria-expanded="false">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <nav class="inspire-menu" aria-label="主导航">
      <a href="index2.html">首页</a>
      <a href="about.html">关于我们</a>
      <a href="neijin.html">内劲一指禅</a>
      <a href="qigong-museum.html">气功博物馆</a>
      <a href="events.html">活动中心</a>
      <a href="contact.html">联系我们</a>
      <a href="en/index.html" class="lang-switch" aria-label="English">
        <img src="images/uk-flag.svg" alt="English">
      </a>
    </nav>
  </div>
</header>
    
`;

// Finds the placeholder by its ID and inserts the code inside it
document.getElementById('Common-Header-placeholder').innerHTML = commonHeaderCode;


const commonFooterCode = `

  <a class="back-to-top" href="#home" aria-label="返回页面顶部">↑</a>
  <footer id="contact" class="contact">
    <div class="section contact-grid">
      <div class="contact-card">
      
        <p>电子邮箱：<a href="mailto:neijin.yzc@gmail.com">neijin.yzc@gmail.com</a></p>
        <p>中文网站：<a href="https://www.neijin-yizhichan.org/index2">www.neijin-yizhichan.org</a></p>
        <p>德文网站：<a href="https://www.neijin-qigong.com/">www.neijin-qigong.com</a></p>
        <p>YouTube：<a href="https://www.youtube.com/@NeijinYizhichan">www.youtube.com/@NeijinYizhichan</a></p>
      </div>

      <div class="contact-card">
      
    <p style="text-align: center;">  
    <a href="https://www.neijin-qigong.com/" aria-label="German" >
      <img src="images/yzc-logo.png" alt=" " style="width: 55px; height: auto; ">
    </a>
    &ensp;
    <a href="about.html" aria-label="YZC" >
      <img src="images/yzc_cnlogo.png" alt=" " style="width: 200px; height: auto;"class="center-image">
    </a>
    &ensp;
    <a href="index2.html" aria-label="Chinese">
      <img src="images/yzc-stamp.gif" alt=" " style="width: auto; height:45px;">
    </a>

    </p>
    <p style="text-align: center;">
      <a href="neijin.html">内劲一指禅</a> &ensp;
      <a href="events.html">活动中心</a> &ensp;
      <a href="qigong-museum.html">气功博物馆</a>
    </p>
        
    <p style="text-align: center;">
  
      <a href="legal-notice.html">法律声明</a> &ensp;&ensp;
      <a href="privacy.html">隐私政策</a>
    </p>
      </div>
    </div>

    <div class="footer">
      <span>© 2026 国际内劲气功学院（International Neijin Qigong Academy）</span>
    </div>
  </footer>
    
`;

// Finds the placeholder by its ID and inserts the code inside it
document.getElementById('Common-Footer-placeholder').innerHTML = commonFooterCode;

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".inspire-menu");

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("is-open");
  });
});
