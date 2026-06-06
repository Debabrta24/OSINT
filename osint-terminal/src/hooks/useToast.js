import { useState, useCallback } from 'react'

export function useToast() {
  const [toast, setToast] = useState(null) // { msg, color }

  const showToast = useCallback((msg, color = '#00ff41') => {
    setToast({ msg, color })
    setTimeout(() => setToast(null), 3000)
  }, [])

  return { toast, showToast }
}
