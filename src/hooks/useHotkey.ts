import hotkeys from 'hotkeys-js'
import { useEffect, useState } from 'react'

const SHORTCUTS_KEY = 'c,r'
const useHotkey = () => {
  const [key, setKey] = useState('')
  useEffect(() => {
    hotkeys(SHORTCUTS_KEY, (event, handler) => {
      console.log(handler.key)
      switch (handler.key) {
        case 'c':
          setKey('c')
          break
        case 'r':
          setKey('r')
          break
        default:
          break
      }
    })
  }, [])
  return { key, setKey }
}

export default useHotkey
