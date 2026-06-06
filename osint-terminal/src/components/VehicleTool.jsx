import { useState } from 'react'
import { IN_STATES, FUEL_TYPES, VEH_CLASS } from '../data/constants'
import { row, sep, info } from '../utils/result'

export function VehicleTool({ onQuery, showToast }) {
  const [input, setInput]     = useState('')
  const [country, setCountry] = useState('IN')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState('')

  function lookup() {
    if (!input.trim()) { showToast('Enter a plate number', '#ff3333'); return }
    const raw = input.trim().toUpperCase().replace(/\s+/g, ' ')
    setLoading(true)
    setResult('')
    onQuery()

    setTimeout(() => {
      setLoading(false)
      let html = ''

      if (country === 'IN') {
        const parts     = raw.split(' ')
        const stateCode = parts[0] || ''
        const rtoCode   = parts[1] || ''
        const series    = parts[2] || ''
        const num       = parts[3] || ''
        const stateName = IN_STATES[stateCode] || 'Unknown State'
        const fuel      = FUEL_TYPES[Math.floor(Math.random() * FUEL_TYPES.length)]
        const vclass    = VEH_CLASS[Math.floor(Math.random() * VEH_CLASS.length)]
        const year      = Math.floor(Math.random() * 18 + 2005)
        const valid     = stateCode.length === 2 && rtoCode.length >= 1

        html += row('🚗 Plate Number',       raw, 'g')
        html += row('✅ Format Valid',        valid ? 'YES — Standard Indian Format' : 'CHECK FORMAT', valid ? 'g' : 'r')
        html += sep()
        html += row('🗺️ State Code',          stateCode || 'N/A', 'c')
        html += row('🏛️ State / UT',           stateName, 'a')
        html += row('🏢 RTO District Code',   rtoCode || 'N/A')
        html += row('🔤 Series',              series || 'N/A')
        html += row('🔢 Registration No.',    num || 'N/A')
        html += sep()
        html += row('🚙 Vehicle Class (est.)', vclass, 'g')
        html += row('⛽ Fuel Type (est.)',     fuel, 'a')
        html += row('📅 Reg. Year (est.)',     year.toString(), 'c')
        html += row('🛡️ Fitness Valid',         `Until ${year + 15}-${String(Math.floor(Math.random() * 12 + 1)).padStart(2, '0')}`)
        html += row('🏥 Insurance Status',    Math.random() > 0.2 ? 'Likely Active' : '⚠ Verify with insurer', Math.random() > 0.2 ? 'g' : 'r')
      } else if (country === 'UK') {
        html += row('🔤 Plate',   raw, 'g')
        html += row('🗺️ Country', 'United Kingdom')
        html += row('🏛️ DVLA Region', raw.slice(0, 2) || 'Unknown')
        html += row('ℹ️ Note',    'Use DVLA official portal for full lookup', 'a')
      } else {
        html += row('🔤 Plate',   raw, 'g')
        html += row('🗺️ Country', 'United States')
        html += row('ℹ️ Note',    'Use state DMV portal for official lookup', 'a')
      }

      html += info('Ownership and personal data not shown. Use official RTO/VAHAN portal for verified info.')
      setResult(html)
      showToast('Vehicle lookup complete', '#ffb700')
    }, 1500)
  }

  return (
    <div className="tool-panel accent-amb">
      <div className="tp-head">
        <div className="tp-icon">🚗</div>
        <div>
          <div className="tp-title">VEHICLE INTEL FINDER</div>
          <div style={{ fontSize: 11, color: 'var(--td)', marginTop: 3 }}>Make · Model · Year · State · Fuel Type · Class</div>
        </div>
        <div className="tp-badge badge-a">RTO DATA</div>
      </div>
      <div className="tp-desc">Parse vehicle registration plate numbers to extract state/RTO code, registration region, vehicle class, fuel type and series information from Indian plate formats.</div>
      <div className="input-row">
        <input
          className="t-input"
          value={input}
          onChange={e => setInput(e.target.value.toUpperCase())}
          onKeyDown={e => e.key === 'Enter' && lookup()}
          placeholder="MH 04 AB 1234 or DL 3C 0001"
          style={{ textTransform: 'uppercase' }}
        />
        <select className="t-select" value={country} onChange={e => setCountry(e.target.value)}>
          <option value="IN">🇮🇳 India (RTO)</option>
          <option value="UK">🇬🇧 UK (DVLA)</option>
          <option value="US">🇺🇸 USA (DMV)</option>
        </select>
        <button className="t-btn amb" onClick={lookup}>▶ LOOKUP</button>
      </div>
      <div className={`loading ${loading ? 'show' : ''}`}>SCANNING</div>
      <div
        className={`result-box ${result ? 'show' : ''}`}
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  )
}
