function toggleShowMenu() {
  const menu = document.getElementById("menu");

  menu.classList.toggle("show");
}
function toggleShowSubMenu() {
  const subMenu = document.getElementById("submenu");
  const icon = document.querySelector("#icon-submenu svg");

  subMenu.classList.toggle("show");
  icon.classList.toggle("rotate-180");
}
function heroStart() {
  const heroSection = document.querySelector(".hero");
  const isHomePage = window.location.pathname === "/";
  const isInsideHeroSection = !!heroSection;

  if (isHomePage && isInsideHeroSection) {
    const parallaxEl = document.querySelectorAll(".parallax");

    if (window.innerWidth >= 728) {
      heroSection.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
      heroSection.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }

    let xValue = 0,
      yValue = 0,
      rotateDegree = 0;
    heroSection.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      parallaxEl.forEach((el) => {
        let speedX = el.dataset.speedx;
        let speedY = el.dataset.speedy;
        let speedZ = el.dataset.speedz;
        let zMove = el.dataset.zvalue;
        let speedRotation = el.dataset.rotation;
        let zValue =
          e.clientX - parseFloat(getComputedStyle(el).left) * parseInt(zMove);

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedX
        }px)) translateY(calc(-50% + ${
          yValue * speedY
        }px )) perspective(20000px) translateZ(${zValue * speedZ}px ) rotateY(${
          rotateDegree * speedRotation
        }deg ) `;
      });
    });
  }
}

document.addEventListener("astro:page-load", () => {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.dataset.theme = "dark";
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.dataset.theme = "light";
    localStorage.setItem("color-theme", "light");
  }

  heroStart();

  const atroposElements = document.querySelectorAll(".my-atropos");

  function initAtropos() {
    if (window.innerWidth > 1024) {
      atroposElements.forEach((element) => {
        Atropos({
          el: element,
          activeOffset: 40,
          shadowScale: 0,
          onEnter() {
            element.querySelector(".atropos-inner").classList.remove("shadow");
            element
              .querySelector(".atropos-inner")
              .classList.add("shadow-atropos");
          },
          onLeave() {
            element.querySelector(".atropos-inner").classList.add("shadow");
            element
              .querySelector(".atropos-inner")
              .classList.remove("shadow-atropos");
          },
        });
      });
    }
  }

  initAtropos();
  window.addEventListener("resize", initAtropos);
});
