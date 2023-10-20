import React, { useState } from 'react'
import CardTabItem from './CardTabItem.jsx'
import TabsButtons from './TabsButtons.jsx'

const TabsContainer = () => {
  const [activeTab, setActiveTab] = useState(1)
  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const tabsData = [
    {
      id: 1,
      imgUrlSm: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640-p-500.jpeg',
      imgUrlMd: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640.jpg',
      title: 'Felices fiestas de primavera',
      description: 'Una estrategia de negocios es el medio por el cual se propone lograr sus fines deseados. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      url: '#'
    },
    {
      id: 2,
      imgUrlSm: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640-p-500.jpeg',
      imgUrlMd: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640.jpg',
      title: 'Felices fiestas de verano',
      description: 'Una estrategia de negocios es el medio por el cual se propone lograr sus fines deseados. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      url: '#'
    },
    {
      id: 3,
      imgUrlSm: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640-p-500.jpeg',
      imgUrlMd: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640.jpg',
      title: 'Felices fiestas de otoño',
      description: 'Una estrategia de negocios es el medio por el cual se propone lograr sus fines deseados. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      url: '#'
    },
    {
      id: 4,
      imgUrlSm: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640-p-500.jpeg',
      imgUrlMd: 'https://assets.website-files.com/62b01487555313003b71f4f1/62c44c55880581c04ede477b_france-1973527_640.jpg',
      title: 'Felices fiestas de invierno',
      description: 'Una estrategia de negocios es el medio por el cual se propone lograr sus fines deseados. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
      url: '#'
    }
  ]
  return (
    <div className='tabs__container'>
      <TabsButtons activeTab={activeTab} handleTabClick={handleTabClick} />
      {tabsData.map((tab) => (
        <CardTabItem
          key={tab.id}
          idTab={tab.id}
          imgUrlSm={tab.imgUrlSm}
          imgUrlMd={tab.imgUrlMd}
          title={tab.title}
          description={tab.description}
          url={tab.url}
          activeTab={activeTab}
        />
      ))}
    </div>
  )
}

export default TabsContainer
