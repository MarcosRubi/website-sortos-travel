/* eslint-disable react/jsx-indent */
import { useEffect, useState } from 'react'
import { useMenuStore } from '../../store/menuStore'

function Menu () {
  const [menuVisible, setMenuVisible] = useState(false)
  const [subMenuVisible, setSubMenuVisible] = useState(false)
  const { active, changeActive, activeChild, changeActiveChild, setActiveBasedOnURL } = useMenuStore()

  const toggleShowMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const toggleShowSubMenu = () => {
    setSubMenuVisible(!subMenuVisible)
  }

  const handleSetActive = (newActive, newActiveChild) => {
    changeActive(newActive)
    changeActiveChild(newActiveChild)
  }

  useEffect(() => {
    setActiveBasedOnURL()
  }, [])

  const serviceItems = [
    { label: 'Boletos aéreos', url: '/servicios/boletos-aereos', child: 1 },
    { label: 'Paquetes turísticos', url: '/servicios/paquetes-turisticos', child: 2 },
    { label: 'Seguros de viaje', url: '/servicios/seguros-de-viaje', child: 3 },
    { label: 'Asesoría migratoria', url: '/servicios/asesoria-migratoria', child: 4 },
    { label: 'Trámites migratorios', url: '/servicios/tramites-migratorios', child: 5 },
    { label: 'Abogado y notario salvadoreño', url: '/servicios/abogado-y-notario', child: 6 },
    { label: 'Aplicaciones y sitios web', url: '/servicios/aplicaciones-y-sitios-web', child: 7 },
    { label: 'Mantenimiento web', url: '/servicios/mantenimiento-web', child: 8 },
    { label: 'Posicionamiento web (SEO)', url: '/servicios/posicionamiento-web', child: 9 }
  ]

  return (
    <>
      <nav className={`menu ${menuVisible ? 'show' : ''}`}>
        <button
          type='button'
          className='menu__button inline-flex items-center justify-center'
          id='menu-hamburguer'
          onClick={toggleShowMenu}
        >
          <svg
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            />
          </svg>
        </button>
        <div className={`menu__items absolute ${menuVisible ? 'show' : ''}`} id='menu'>
          <ul className='flex flex-col-sm mt-1 px-1 font-bold container'>
            <li>
              <a
                href='/'
                className={active === 1 ? 'active' : ''}
                onClick={() => handleSetActive(1, 0)}
                aria-label="Logo Sorto's Travel Multiservices"
              >
                Inicio
              </a>
            </li>
            <li>
              <button
                className={`flex items-center justify-between w-full font-bold ${active === 2 ? 'active' : ''}`}
                onClick={toggleShowSubMenu}
                id='icon-submenu'
              >
                Servicios
                <svg
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 10 6'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m1 1 4 4 4-4'
                  />
                </svg>
              </button>
              <div className={`dropdown-menu ${subMenuVisible ? 'show' : ''}`} id='submenu'>
                <ul>
                  {serviceItems.map((item, index) => (
                    index === 2 || index === 5
                      ? <div key={index}>
                        <li>
                          <a
                            href={item.url}
                            className={activeChild === item.child ? 'active' : ''}
                            onClick={() => handleSetActive(2, item.child)}
                          >
                            {item.label}
                          </a>
                        </li>
                        </div>
                      : <li key={index}>
                        <a
                          href={item.url}
                          className={activeChild === item.child ? 'active' : ''}
                          onClick={() => handleSetActive(2, item.child)}
                        >
                          {item.label}
                        </a>
                        </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <a
                href='/sobre-nosotros'
                className={active === 3 ? 'active' : ''}
                onClick={() => handleSetActive(3, 0)}
              >Sobre nosotros
              </a>
            </li>
            <li>
              <a
                href='/contacto'
                className={active === 4 ? 'active' : ''}
                onClick={() => handleSetActive(4, 0)}
              >Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Menu
