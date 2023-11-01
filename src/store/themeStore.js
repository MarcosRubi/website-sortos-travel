import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: window.localStorage.getItem('theme') || 'dark', // Lee del localStorage o establece un valor predeterminado
  toggleTheme: () => set((state) => {
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    window.localStorage.setItem('theme', newTheme) // Guarda el nuevo valor en el localStorage
    return { theme: newTheme }
  })
}))
