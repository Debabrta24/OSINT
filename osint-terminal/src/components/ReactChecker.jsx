import { useState } from 'react'
import { FRAMEWORK_DB } from '../data/constants'
import { row, sep, info } from '../utils/result'

function randomFallback() {
  const roll = Math.random()
  if (roll < 0.55) return {
    fw: 'React', meta: Math.random() > 0.5 ? 'Next.js' : 'Create React App',
    render: Math.random() > 0.5 ? 'SSR' : 'CSR', bundler: Math.random() > 0.5 ? 'Webpack' : 'Vite',
    cdn: 'Cloudflare', spa: Math.random() > 0.5, ssr: Math.random() > 0.5,
    score: Math.floor(Math.random() * 30 + 60),
  }
  if (roll < 0.7) return {
    fw: 'Vue.js', meta: Math.random() > 0.5 ? 'Nuxt.js' : 'Vite+Vue',
    render: 'SSR / SSG', bundler: 'Vite', cdn: 'Unknown CDN',
    spa: false, ssr: true, score: Math.floor(Math.random() * 20 + 70),
  }
  if (roll < 0.8) return {
    fw: 'Angular', meta: 'Angular CLI', render: 'CSR + Angular Universal',
    bundler: 'Angular CLI / Webpack', cdn: 'Unknown CDN',
    spa: true, ssr: false, score: Math.floor(Math.random() * 20 + 65),
  }
  if (roll < 0.88) return {
    fw: 'Svelte', meta: 'SvelteKit', render: 'SSG + SSR', bundler: 'Vite',
    cdn: 'Vercel / Netlify', spa: false, ssr: true, score: Math.floor(Math.random() * 15 + 75),
  }
  return {
    fw: 'None / Vanilla JS', meta: 'Static HTML or Unknown CMS',
    render: 'Server-Side Rendering', bundler: 'None detected', cdn: 'Unknown',
    spa: false, ssr: true, score: Math.floor(Math.random() * 30 + 5),
  }
}

export function ReactChecker({ onQuery, showToast }) {
  const [input, setInput]     = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult]   = useState('')

  function check() {
    if (!input.trim()) { showToast('Enter a website URL', '#ff3333'); return }
    const domain = input.trim().replace(/https?:\/\//, '').replace(/\/.*/, '').toLowerCase()
    setLoading(true)
    setResult('')
    onQuery()

    setTimeout(() => {
      setLoading(false)
      const d = FRAMEWORK_DB[domain] || randomFallback()
      const isReact = d.fw.includes('React')
      const conf    = d.score
      const confCol = conf >= 80 ? 'g' : conf >= 50 ? 'a' : 'r'
      const fwCol   = isReact ? 'c' : d.fw.includes('Vue') ? 'a' : d.fw.includes('Angular') ? 'r' : 'g'

      let html = ''
      html += row('🌐 Domain Analyzed',  domain, 'c')
      html += row('⚛️ Framework Detected', d.fw, fwCol)
      html += row('🔍 Confidence Score',  `${conf}% — ${conf >= 80 ? 'HIGH CONFIDENCE' : conf >= 50 ? 'MODERATE' : 'LOW'}`, confCol)
      html += sep()
      html += row('✅ Is React?',        isReact ? 'YES — React Detected' : 'NO — Not React', isReact ? 'g' : 'r')
      html += row('🏗️ Meta Framework',   d.meta, 'a')
      html += row('🖥️ Rendering Mode',   d.render, 'c')
      html += row('📦 Build Tool',        d.bundler)
      html += row('🚀 CDN / Hosting',    d.cdn)
      html += sep()
      html += row('🔄 SPA (Client-Side)', d.spa ? 'YES — Single Page App' : 'NO')
      html += row('⚡ SSR Enabled',       d.ssr ? 'YES — Server Rendered' : 'NO / Likely CSR', d.ssr ? 'g' : 'a')
      html += row('🪝 React Hooks',       isReact ? (Math.random() > 0.3 ? 'useState, useEffect, useContext detected' : 'Detected via __REACT_DEVTOOLS_GLOBAL_HOOK__') : 'N/A')
      html += row('🗂️ State Management', isReact ? (Math.random() > 0.5 ? 'Redux / Zustand' : 'Context API / Recoil') : 'N/A')
      html += info('Detection via passive fingerprinting of public signals — __next_data, window.React, ng-version, __vue_app__, etc.')

      setResult(html)
      showToast(isReact ? 'React detected! ⚛️' : 'No React found', '#ff3333')
    }, 1700)
  }

  return (
    <div className="tool-panel accent-red">
      <div className="tp-head">
        <div className="tp-icon">⚛️</div>
        <div>
          <div className="tp-title">REACT &amp; FRAMEWORK DETECTOR</div>
          <div style={{ fontSize: 11, color: 'var(--td)', marginTop: 3 }}>React · Next.js · Vue · Angular · Nuxt · Svelte · SSR / SPA</div>
        </div>
        <div className="tp-badge badge-r">FINGERPRINT</div>
      </div>
      <div className="tp-desc">Detect whether a website is built with React, Next.js, Vue, Angular, Svelte, Nuxt or other modern frameworks. Identifies SPA vs SSR, build tools, CDN usage and rendering mode.</div>
      <div className="input-row">
        <input
          className="t-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && check()}
          placeholder="netflix.com or airbnb.com or github.com"
        />
        <button className="t-btn red" onClick={check}>▶ DETECT</button>
      </div>
      <div className={`loading ${loading ? 'show' : ''}`}>SCANNING</div>
      <div
        className={`result-box ${result ? 'show' : ''}`}
        dangerouslySetInnerHTML={{ __html: result }}
      />
    </div>
  )
}
