import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  active: 1,
  activeChild: 0,
  changeActive: (newTabActive) => {
    set({ active: newTabActive })
  },
  changeActiveChild: (newChildActive) => {
    set({ activeChild: newChildActive })
  },
  setActiveBasedOnURL: () => {
    const currentURL = window.location.pathname

    const menuItems = {
      '/servicios/boletos-aereos': { parent: 2, child: 1 },
      '/servicios/paquetes-turisticos': { parent: 2, child: 2 },
      '/servicios/seguros-de-viaje': { parent: 2, child: 3 },
      '/servicios/asesoria-migratoria': { parent: 2, child: 4 },
      '/servicios/tramites-migratorios': { parent: 2, child: 5 },
      '/servicios/abogado-y-notario': { parent: 2, child: 6 },
      '/servicios/aplicaciones-y-sitios-web': { parent: 2, child: 7 },
      '/servicios/mantenimiento-web': { parent: 2, child: 8 },
      '/servicios/posicionamiento-web': { parent: 2, child: 9 },
      '/sobre-nosotros': { parent: 3, child: 0 },
      '/contacto': { parent: 4, child: 0 },
      '/': { parent: 1, child: 0 }
    }

    if (currentURL.startsWith('/tour/')) {
      menuItems[currentURL] = { parent: 2, child: 2 }
    }

    const activeMenuItem = menuItems[currentURL] || { parent: 1, child: 0 }

    set({ active: activeMenuItem.parent })
    set({ activeChild: activeMenuItem.child })
  }
}))
