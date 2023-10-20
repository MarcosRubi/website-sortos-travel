import { useState } from 'react'

function Accordion () {
  const [activeTab, setActiveTab] = useState(0)

  const toggleAccordion = (index) => {
    if (activeTab === index) {
      setActiveTab(null)
    } else {
      setActiveTab(index)
    }
  }

  return (
    <div className='accordion'>
      {accordionData.map((item, index) => (
        <div className='accordion-item' key={item.id}>
          <button
            id={`accordion-button-${item.id}`}
            aria-expanded={activeTab === index}
            onClick={() => toggleAccordion(index)}
          >
            <span className='accordion-title'>{item.title}</span>
            <span className='icon' aria-hidden='true' />
          </button>
          <div className={`accordion-content ${activeTab === index ? 'active' : ''}`}>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

const accordionData = [
  {
    id: 1,
    title: 'Día 1: Llegada y entrada al hotel',
    content: 'Llegada al destino y entrada al hotel. Check-in a las 2:00 PM. Disfruta de la comodidad de tu habitación y relájate en la piscina del hotel.'
  },
  {
    id: 2,
    title: 'Día 2: Explora el centro histórico',
    content: 'Comienza el día con un delicioso desayuno en el hotel. Luego, dirígete al centro histórico de la ciudad. Visita la catedral, los museos locales y disfruta de la comida en un restaurante tradicional.'
  },
  {
    id: 3,
    title: 'Día 3: Aventura al aire libre',
    content: 'Hoy es el día de aventura. Sal temprano para una excursión de senderismo en las montañas cercanas. Escalarás hasta la cima y disfrutarás de vistas panorámicas. También puedes nadar en el río en el camino de regreso.'
  },
  {
    id: 4,
    title: 'Día 4: Exploración cultural',
    content: 'Explora la cultura local visitando mercados de artesanía y asistiendo a una clase de cocina tradicional. Por la tarde, visita un templo histórico y conoce la historia del lugar.'
  },
  {
    id: 5,
    title: 'Día 5: Salida y regreso a casa',
    content: 'Check-out del hotel a las 12:00 PM. Luego, dirígete al aeropuerto para tu vuelo de regreso. Guarda tus recuerdos y fotos de este maravilloso viaje.'
  }
]

export default Accordion
