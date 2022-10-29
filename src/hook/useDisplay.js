import { useState, useEffect } from 'react'

function useDisplay () {
  const [theme, setTheme] = useState('light')
  const nextTheme = theme === 'dark' ? 'light' : 'dark'
  useEffect(() => {
    const rootElement = window.document.documentElement
    rootElement.classList.remove(nextTheme)
    rootElement.classList.add(theme)
  }, [theme, nextTheme])
  return [nextTheme, setTheme]
}
export default useDisplay