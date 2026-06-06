import { useRef, useState } from 'react'
import { useMatrix } from './hooks/useMatrix'
import { useClock }  from './hooks/useClock'
import { useToast }  from './hooks/useToast'

import { BootScreen }    from './components/BootScreen'
import { Navbar }        from './components/Navbar'
import { Toast }         from './components/Toast'
import { PhoneTool }     from './components/PhoneTool'
import { IPTool }        from './components/IPTool'
import { ReactChecker }  from './components/ReactChecker'
import { TrafficTool }   from './components/TrafficTool'
import { SpeedTool }     from './components/SpeedTool'
import { VehicleTool }   from './components/VehicleTool'
import { TICKER_TEXT }   from './data/constants'

const SESSION_ID = Math.floor(Math.random() * 9999).toString().padStart(4, '0')

export default function App() {
  const canvasRef       = useRef(null)
  const [queries, setQueries] = useState(0)
  const { utc, session } = useClock()
  const { toast, showToast } = useToast()

  useMatrix(canvasRef)

  function onQuery() {
    setQueries(q => q + 1)
  }

  return (
    <>
      <BootScreen />
      <canvas id="mc" ref={canvasRef} />
      <Toast toast={toast} />
      <Navbar utc={utc} />

      <div className="wrap">
        {/* ── HERO ── */}
        <div className="hero">
          <div className="hero-top">
            <div><span className="sdot" />SYSTEM ONLINE // SESSION: ANON_{SESSION_ID}</div>
            <div>NODE: 127.0.0.1 // TOR: ACTIVE</div>
          </div>
          <div className="logo">OSINT <em>TERMINAL</em></div>
          <div className="sub">OPEN SOURCE INTELLIGENCE &amp; NETWORK ANALYSIS SUITE</div>
          <div className="ticker-wrap">
            <span className="ticker-inner">{TICKER_TEXT}</span>
          </div>
        </div>

        {/* ── STATS ── */}
        <div className="stats">
          <div className="stat"><span className="stat-v" style={{ color: 'var(--cyn)' }}>6</span><span className="stat-l">Tools Active</span></div>
          <div className="stat"><span className="stat-v">TOR</span><span className="stat-l">Routing</span></div>
          <div className="stat"><span className="stat-v">{queries}</span><span className="stat-l">Queries Run</span></div>
          <div className="stat"><span className="stat-v" style={{ color: 'var(--g)' }}>LIVE</span><span className="stat-l">Status</span></div>
          <div className="stat"><span className="stat-v" style={{ color: 'var(--amb)' }}>AES</span><span className="stat-l">Encrypted</span></div>
          <div className="stat"><span className="stat-v">{session}</span><span className="stat-l">Session</span></div>
        </div>

        {/* ── TOOLS ── */}
        <div className="sec-head" id="phone">Phone Number Intelligence</div>
        <PhoneTool onQuery={onQuery} showToast={showToast} />

        <div className="sec-head" id="ip">IP Address Intelligence</div>
        <IPTool onQuery={onQuery} showToast={showToast} />

        <div className="sec-head" id="react">React / Framework Detector</div>
        <ReactChecker onQuery={onQuery} showToast={showToast} />

        <div className="sec-head" id="traffic">Website Traffic Analyzer</div>
        <TrafficTool onQuery={onQuery} showToast={showToast} />

        <div className="sec-head" id="speed">Network Speed Tester</div>
        <SpeedTool onQuery={onQuery} showToast={showToast} />

        <div className="sec-head" id="vehicle">Vehicle Registration Lookup</div>
        <VehicleTool onQuery={onQuery} showToast={showToast} />

        <footer>
          OSINT TERMINAL // FOR AUTHORIZED USE ONLY // <span>ALL ACTIVITY LOGGED</span> // &copy; 2024
        </footer>
      </div>
    </>
  )
}
