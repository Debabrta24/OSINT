import { useState, useEffect, useRef } from 'react'

export function useClock() {
  const [utc, setUtc]     = useState('00:00:00 UTC')
  const [session, setSession] = useState('0m')
  const startRef = useRef(Date.now())

  useEffect(() => {
    const id = setInterval(() => {
      const n = new Date()
      const h = String(n.getUTCHours()).padStart(2, '0')
      const m = String(n.getUTCMinutes()).padStart(2, '0')
      const s = String(n.getUTCSeconds()).padStart(2, '0')
      setUtc(`${h}:${m}:${s} UTC`)
      const elapsed = Math.floor((Date.now() - startRef.current) / 60000)
      setSession(`${elapsed}m`)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return { utc, session }
}
