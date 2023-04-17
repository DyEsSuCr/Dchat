
import { useState, useEffect } from 'react'

export function useLocalStorage (key) {
  const [item, setItem] = useState(JSON.parse(window.localStorage.getItem(key)))

  useEffect(() => {
    if (!item) return window.localStorage.setItem(key, JSON.stringify(item))

    setItem(item)
    window.localStorage.setItem('token', JSON.stringify(item))
  }, [item])

  return { item, setItem }
}
