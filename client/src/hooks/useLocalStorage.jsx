
import { useState, useEffect } from 'react'

export function useLocalStorage (key) {
  const [item, setItem] = useState(null)
  const localItem = JSON.parse(window.localStorage.getItem(key))

  useEffect(() => {
    if (!localItem) window.localStorage.setItem(key, JSON.stringify(item))
    else setItem(localItem)
  }, [])

  return { item, setItem }
}
