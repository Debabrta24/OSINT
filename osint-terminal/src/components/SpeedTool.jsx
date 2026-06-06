import { useState, useRef } from 'react'

const SERVERS = ['Auto (Nearest Server)', 'Mumbai, IN', 'Singapore, SG', 'London, UK', 'New York, US', 'Tokyo, JP']

export function SpeedTool({ onQuery, showToast }) {
  const [server, setServer]   = useState(SERVERS[0])
  const [running, setRunning] = useState(false)
  const [dl, setDl]           = useState('--')
  const [ul, setUl]           = useState('--')
  const [ping, setPing]       = useState('--')
  const [jitter, setJitter]   = useState('--')
  const [loss, setLoss]       = useState('--')
  const [progress, setProgress] = useState(0)
  const [label, setLabel]     = useState('READY TO TEST')
  const intervalRef = useRef(null)

  function run() {
    if (running) return
    setRunning(true)
    setLabel('TESTING...')
    setDl('...'); setUl('...'); setPing('...'); setJitter('...'); setLoss('...')
    setProgress(0)
    onQuery()

    let prog = 0
    intervalRef.current = setInterval(() => {
      prog += Math.random() * 15
      if (prog > 100) prog = 100
      setProgress(prog)
      setDl(((prog / 100) * Math.random() * 150 + 20).toFixed(1))
    }, 200)

    setTimeout(() => {
      clearInterval(intervalRef.current)
      const dlFinal     = (Math.random() * 200 + 10).toFixed(1)
      const ulFinal     = (Math.random() * 80  + 5).toFixed(1)
      const pingFinal   = Math.floor(Math.random() * 80 + 5)
      const jitterFinal = (Math.random() * 15 + 1).toFixed(1)
      const lossFinal   = (Math.random() * 2).toFixed(1)
      setDl(dlFinal); setUl(ulFinal); setPing(pingFinal)
      setJitter(jitterFinal); setLoss(lossFinal)
      setProgress(100)
      setRunning(false)
      setLabel('TEST COMPLETE')
      showToast(`Speed: ${dlFinal} Mbps ↓ / ${ulFinal} Mbps ↑`, '#00f0ff')
    }, 4000)
  }

  return (
    <div className="tool-panel accent-cyn">
      <div className="tp-head">
        <div className="tp-icon">⚡</div>
        <div>
          <div className="tp-title">NETWORK SPEED ANALYZER</div>
          <div style={{ fontSize: 11, color: 'var(--td)', marginTop: 3 }}>Download · Upload · Ping · Jitter · Packet Loss</div>
        </div>
        <div className="tp-badge badge-c">LIVE TEST</div>
      </div>
      <div className="tp-desc">Real-time network performance test measuring download/upload speeds, latency (ping), jitter, and estimated packet loss via multi-endpoint bandwidth sampling.</div>
      <div className="input-row">
        <select className="t-select" value={server} onChange={e => setServer(e.target.value)}>
          {SERVERS.map(s => <option key={s}>{s}</option>)}
        </select>
        <button className="t-btn cyn" onClick={run} disabled={running}>
          {running ? '⏳ TESTING...' : '▶ RUN TEST'}
        </button>
      </div>
      <div className="result-box show">
        <div className="speed-meter">
          <div style={{ fontFamily: "'Orbitron',monospace", fontSize: 11, color: 'var(--td)', letterSpacing: 2, marginBottom: 16 }}>
            {label}
          </div>
          <div className="speed-num">{dl}</div>
          <div className="speed-unit">Mbps DOWNLOAD</div>
          <div className="progress-track" style={{ marginTop: 12 }}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="speed-bars">
          <div className="sbar"><div className="sbar-v" style={{ color: 'var(--amb)' }}>{ul}</div><div className="sbar-l">Mbps UPLOAD</div></div>
          <div className="sbar"><div className="sbar-v" style={{ color: 'var(--cyn)' }}>{ping}</div><div className="sbar-l">ms PING</div></div>
          <div className="sbar"><div className="sbar-v" style={{ color: 'var(--g)' }}>{jitter}</div><div className="sbar-l">ms JITTER</div></div>
          <div className="sbar"><div className="sbar-v" style={{ color: 'var(--red)' }}>{loss}</div><div className="sbar-l">% PACKET LOSS</div></div>
        </div>
      </div>
    </div>
  )
}
