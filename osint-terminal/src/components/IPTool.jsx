import { useState } from 'react'
import { row, sep } from '../utils/result'

export function IPTool({ onQuery, showToast }) {
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState('')
  const [mapInfo, setMapInfo] = useState(null) // { city, country }

  async function lookup(forceBlank = false) {
    const inp = forceBlank ? '' : input.trim()
    setLoading(true)
    setResult('')
    setMapInfo(null)
    onQuery()

    try {
      const url = inp ? `https://ipapi.co/${inp}/json/` : 'https://ipapi.co/json/'
      const r   = await fetch(url)
      const d   = await r.json()
      setLoading(false)

      if (d.error) {
        setResult(`<div class="r-val r">❌ ${d.reason || 'Invalid IP address'}</div>`)
        return
      }

      const proxy = d.proxy || d.hosting || false
      let html = ''
      html += row('🌐 IP Address',   d.ip, 'g')
      html += row('📍 Country',      `${d.country_name} (${d.country_code})`)
      html += row('🏙️ City / Region', `${d.city || 'N/A'}, ${d.region || 'N/A'}`)
      html += row('📮 Postal Code',  d.postal || 'N/A')
      html += row('🗺️ Coordinates',   d.latitude && d.longitude
        ? `${d.latitude.toFixed(4)}, ${d.longitude.toFixed(4)}` : 'N/A', 'c')
      html += sep()
      html += row('📡 ISP / Org',    d.org || 'Unknown', 'a')
      html += row('🔢 ASN',          d.asn || 'Unknown')
      html += row('⏰ Timezone',      d.timezone || 'Unknown')
      html += row('💱 Currency',     d.currency_name || 'Unknown')
      html += sep()
      html += row('🕵️ Proxy / VPN',  proxy ? '⚠ DETECTED' : 'NOT DETECTED', proxy ? 'r' : 'g')
      html += row('🌍 IP Version',   d.version || 'IPv4')
      html += row('📞 Calling Code', d.country_calling_code || 'N/A')

      setResult(html)
      setMapInfo({ city: d.city || '', country: d.country_name || '' })
      showToast('IP located successfully', '#ffb700')
    } catch {
      setLoading(false)
      setResult('<div class="r-val r">❌ API request failed. Check network connection.</div>')
    }
  }

  return (
    <div className="tool-panel accent-amb">
      <div className="tp-head">
        <div className="tp-icon">🌐</div>
        <div>
          <div className="tp-title">IP GEOLOCATION FINDER</div>
          <div style={{ fontSize: 11, color: 'var(--td)', marginTop: 3 }}>Location · ISP · ASN · Timezone · Proxy Detection</div>
        </div>
        <div className="tp-badge badge-a">LIVE API</div>
      </div>
      <div className="tp-desc">Lookup any IPv4/IPv6 address for geolocation, ISP, ASN, organization, timezone, and proxy/VPN/TOR detection. Leave blank to lookup your own IP.</div>
      <div className="input-row">
        <input
          className="t-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && lookup()}
          placeholder="8.8.8.8 or 2001:4860:4860::8888 (blank = your IP)"
        />
        <button className="t-btn amb" onClick={() => lookup()}>▶ LOOKUP</button>
        <button className="t-btn" onClick={() => { setInput(''); lookup(true) }}>MY IP</button>
      </div>
      <div className={`loading ${loading ? 'show' : ''}`}>SCANNING</div>
      <div
        className={`result-box ${result ? 'show' : ''}`}
        dangerouslySetInnerHTML={{ __html: result }}
      />
      {mapInfo && (
        <div className="map-box">
          <div className="map-grid" />
          <div className="map-pin">📍</div>
          <span className="map-label">📍 {mapInfo.city}, {mapInfo.country}</span>
        </div>
      )}
    </div>
  )
}
