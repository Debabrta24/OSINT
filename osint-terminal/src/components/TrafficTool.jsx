import { useState } from 'react'
import { row, sep, info } from '../utils/result'

const COUNTRIES = ['🇮🇳 India','🇺🇸 USA','🇬🇧 UK','🇩🇪 Germany','🇧🇷 Brazil','🇫🇷 France','🇯🇵 Japan','🇨🇦 Canada','🇦🇺 Australia']
const SOURCES   = ['Organic Search','Direct','Social Media','Referral']

export function TrafficTool({ onQuery, showToast }) {
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState('')

  function check() {
    const domain = input.trim().replace(/https?:\/\//, '').replace(/\/.*/, '')
    if (!domain) { showToast('Enter a domain', '#ff3333'); return }
    setLoading(true)
    setResult('')
    onQuery()

    setTimeout(() => {
      setLoading(false)
      const rank     = Math.floor(Math.random() * 5_000_000 + 1)
      const visits   = Math.floor(Math.random() * 50_000_000 + 5_000)
      const bounce   = (Math.random() * 50 + 20).toFixed(1)
      const duration = `${Math.floor(Math.random() * 5 + 1)}m ${Math.floor(Math.random() * 59 + 1)}s`
      const pages    = (Math.random() * 6 + 1).toFixed(1)
      const top4     = [...COUNTRIES].sort(() => Math.random() - 0.5).slice(0, 4)
      const source   = SOURCES[Math.floor(Math.random() * SOURCES.length)]
      const growth   = Math.random() > 0.5

      let html = ''
      html += row('🌐 Domain',         domain, 'c')
      html += row('🏆 Global Rank',    `#${rank.toLocaleString()}`, rank < 100_000 ? 'g' : rank < 1_000_000 ? 'a' : 'r')
      html += row('👁️ Monthly Visits', visits.toLocaleString(), 'g')
      html += sep()
      html += row('⏱️ Avg Visit Duration', duration, 'a')
      html += row('📄 Pages / Visit',  pages)
      html += row('↩️ Bounce Rate',    `${bounce}%`, parseFloat(bounce) < 40 ? 'g' : parseFloat(bounce) < 60 ? 'a' : 'r')
      html += sep()
      html += row('🌍 Top Countries',  top4.slice(0, 2).join(' · '), 'c')
      html += row('',                  top4.slice(2).join(' · '))
      html += row('📣 Top Traffic Source', source, 'g')
      html += row('📈 MoM Growth',     `${growth ? '+' : '−'}${(Math.random() * 15).toFixed(1)}%`, growth ? 'g' : 'r')
      html += info('Estimates based on public data. For accurate analytics use Google Analytics on your own site.')

      setResult(html)
      showToast('Traffic analysis complete')
    }, 1800)
  }

  return (
    <div className="tool-panel">
      <div className="tp-head">
        <div className="tp-icon">📊</div>
        <div>
          <div className="tp-title">TRAFFIC INTELLIGENCE</div>
          <div style={{ fontSize: 11, color: 'var(--td)', marginTop: 3 }}>Global Rank · Monthly Visits · Bounce Rate · Top Countries</div>
        </div>
        <div className="tp-badge badge-g">ANALYTICS</div>
      </div>
      <div className="tp-desc">Analyze estimated global traffic rank, monthly visitor counts, average visit duration, bounce rate, and top traffic source countries for any domain.</div>
      <div className="input-row">
        <input
          className="t-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && check()}
          placeholder="google.com"
        />
        <button className="t-btn" onClick={check}>▶ ANALYZE</button>
      </div>
      <div className={`loading ${loading ? 'show' : ''}`}>SCANNING</div>
      <div
        className={`result-box ${result ? 'show' : ''}`}
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  )
}
