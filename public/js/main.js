/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
/* eslint-disable no-undef */

document.addEventListener('astro:page-load', () => {
  const isTourPage = /^\/tour\/.*/.test(window.location.pathname)

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
})
