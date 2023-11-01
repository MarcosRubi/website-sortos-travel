import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  active: 1,
  activeChild: 0,
  changeActive: (newTabActive) => {
    set({ active: newTabActive })
  },
  changeActiveChild: (newChildActive) => {
    set({ activeChild: newChildActive })
  }
}))
