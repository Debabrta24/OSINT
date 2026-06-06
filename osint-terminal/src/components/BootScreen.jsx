const LINES = [
  '[ BIOS v3.1.1 ] Initializing hardware...',
  '[ MEM ] 32768MB DDR5 OK',
  '[ NET ] Interface eth0 UP — TOR routing active',
  '[ SEC ] Firewall rules loaded (847 rules)',
  '[ OSINT ] Intelligence modules loading...',
  '[ TOOL ] Phone · IP · Web · Traffic · Speed · Vehicle',
  '[ OK ] All systems operational',
  '[ BOOT ] Launching OSINT TERMINAL...',
]

export function BootScreen() {
  return (
    <div className="boot">
      <div className="boot-text">
        {LINES.map((l, i) => (
          <div key={i} className="boot-line">{l}</div>
        ))}
      </div>
    </div>
  )
}
