import { useEffect } from 'react'

function Hero () {
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
            // eslint-disable-next-line no-undef
            e.clientX - parseFloat(getComputedStyle(el).left) * parseInt(zMove)

          el.style.transform = `translateX(calc(-50% + ${-xValue * speedX
            }px)) translateY(calc(-50% + ${yValue * speedY
            }px )) perspective(20000px) translateZ(${zValue * speedZ}px ) rotateY(${rotateDegree * speedRotation
            }deg ) `
        })
      })
    }
  }
  useEffect(() => {
    heroStart()
  }, [])

  return (
    <section className='hero relative'>
      <img
        src='images/bg-main.webp'
        className='parallax bg-main'
        data-speedx='0.05'
        data-speedy='0.02'
        data-speedz='0.62'
        data-zvalue='0'
        data-rotation='0'
        data-distance='00'
        aria-hidden='true'
      />

      <img
        src='images/bg-front.webp'
        className='parallax bg-front'
        data-speedx='0.0016'
        data-speedy='0.0654'
        data-speedz='0.017'
        data-zvalue='-1'
        data-rotation='0.2'
        data-distance='500'
        aria-hidden='true'
      />

      <img
        src='images/fog_1.webp'
        className='parallax fog-1'
        data-speedx='0.195'
        data-speedy='0.20'
        data-speedz='0'
        data-zvalue='0'
        data-rotation='0'
        data-distance='200'
        aria-hidden='true'
        id='fog-1'
      />
      <img
        src='images/bg-mid.webp'
        className='bg-mid parallax'
        data-speedx='0.0325'
        data-speedy='0.0300'
        data-speedz='0.62'
        data-zvalue='1'
        data-rotation='0.3'
        data-distance='400'
        aria-hidden='true'
        id='bg-mid'
      />
      <img
        src='images/bg-right.webp'
        className='bg-right parallax'
        data-speedx='0.01'
        data-speedy='0.0376'
        data-speedz='0.62'
        data-zvalue='1'
        data-rotation='0.3'
        data-distance='500'
        aria-hidden='true'
      />

      <img
        src='images/fog_3.webp'
        className='fog fog-3 parallax'
        data-speedx='0.25'
        data-speedy='0.142'
        data-speedz='0'
        data-zvalue='1'
        data-rotation='0'
        data-distance='100'
        aria-hidden='true'
        id='fog-3'
      />
      <img
        src='images/fog_2.webp'
        className='fog fog-2 parallax'
        data-speedx='0.07'
        data-speedy='0.003'
        data-speedz='0'
        data-zvalue='0'
        data-rotation='0'
        data-distance='300'
        aria-hidden='true'
        id='fog-2'
      />
      <div
        className='text parallax'
        data-speedx='0'
        data-speedy='0'
        data-speedz='0.5'
        data-zvalue='0.2'
        data-rotation='0'
        data-distance='70'
        aria-hidden='true'
        id='text'
      >
        <h1 className='container'>
          Descubre <span>Sorto's Travel Multiservices</span> - Tu Destino para
          Viajes, Seguros y Trámites
        </h1>
      </div>
    </section>
  )
}

export default Hero
