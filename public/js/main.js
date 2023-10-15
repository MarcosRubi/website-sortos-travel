/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable no-undef */
function toggleShowMenu () {
  const menu = document.getElementById('menu')

  menu.classList.toggle('show')
}
function toggleShowSubMenu () {
  const subMenu = document.getElementById('submenu')
  const icon = document.querySelector('#icon-submenu svg')

  subMenu.classList.toggle('show')
  icon.classList.toggle('rotate-180')
}
function heroStart () {
  const heroSection = document.querySelector('.hero')
  const isInsideHeroSection = !!heroSection

  if (isInsideHeroSection) {
    const parallaxEl = document.querySelectorAll('.parallax')

    if (window.innerWidth >= 728) {
      heroSection.style.maxHeight = `${window.innerWidth * 0.6}px`
    } else {
      heroSection.style.maxHeight = `${window.innerWidth * 1.6}px`
    }

    let xValue = 0
    let yValue = 0
    let rotateDegree = 0
    heroSection.addEventListener('mousemove', (e) => {
      xValue = e.clientX - window.innerWidth / 2
      yValue = e.clientY - window.innerHeight / 2

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20

      parallaxEl.forEach((el) => {
        const speedX = el.dataset.speedx
        const speedY = el.dataset.speedy
        const speedZ = el.dataset.speedz
        const zMove = el.dataset.zvalue
        const speedRotation = el.dataset.rotation
        const zValue =
          e.clientX - parseFloat(getComputedStyle(el).left) * parseInt(zMove)

        el.style.transform = `translateX(calc(-50% + ${
          -xValue * speedX
        }px)) translateY(calc(-50% + ${
          yValue * speedY
        }px )) perspective(20000px) translateZ(${zValue * speedZ}px ) rotateY(${
          rotateDegree * speedRotation
        }deg ) `
      })
    })
  }
}
function getThemeSelected () {
  if (
    window.localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.dataset.theme = 'dark'
    window.localStorage.setItem('color-theme', 'dark')
  } else {
    document.documentElement.dataset.theme = 'light'
    window.localStorage.setItem('color-theme', 'light')
  }
}

document.addEventListener('astro:page-load', () => {
  const isHomePage = window.location.pathname === '/'
  const isTourPage = /^\/tour\/.*/.test(window.location.pathname)

  // JS SOLO DEL HOME
  if (isHomePage) {
    const buttonsTabs = document.querySelectorAll('.tabs .btn')

    buttonsTabs.forEach(button => {
      button.addEventListener('click', (e) => {
        changeTabToShow(e)
      })
    })

    heroStart()
    function changeTabToShow (e) {
      const tabId = e.target.dataset.tab

      document.querySelector('.tabs .btn.active').classList.remove('active')
      document.querySelector('.tabs__item.active').classList.remove('active')

      e.target.classList.add('active')
      document.getElementById(`tab-${tabId}`).classList.add('active')
    }
  }

  if (isTourPage) {
    function changeTabToShow (e) {
      const tabId = e.target.dataset.tab

      document.querySelector('#tabs .btn.active').classList.remove('active')
      document.querySelector('.tab__item.active').classList.remove('active')

      e.target.classList.add('active')
      document.getElementById(`tab-${tabId}`).classList.add('active')
    }

    const buttonsTabs = document.querySelectorAll('#tabs .btn')

    buttonsTabs.forEach(button => {
      button.addEventListener('click', (e) => {
        changeTabToShow(e)
      })
    })

    const items = document.querySelectorAll('.accordion button')

    function toggleAccordion () {
      const itemToggle = this.getAttribute('aria-expanded')

      for (i = 0; i < items.length; i++) {
        items[i].setAttribute('aria-expanded', 'false')
      }

      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true')
      }
    }

    items.forEach(item => item.addEventListener('click', toggleAccordion))

    new VenoBox()
  }

  // JS GLOBAL
  const atroposElements = document.querySelectorAll('.my-atropos')

  function initAtropos () {
    if (window.innerWidth > 1024) {
      atroposElements.forEach((element) => {
        Atropos({
          el: element,
          activeOffset: 40,
          shadowScale: 0,
          onEnter () {
            element.querySelector('.atropos-inner').classList.remove('shadow')
            element
              .querySelector('.atropos-inner')
              .classList.add('shadow-atropos')
          },
          onLeave () {
            element.querySelector('.atropos-inner').classList.add('shadow')
            element
              .querySelector('.atropos-inner')
              .classList.remove('shadow-atropos')
          }
        })
      })
    }
  }
  initAtropos()
  window.addEventListener('resize', initAtropos)

  getThemeSelected()
})
