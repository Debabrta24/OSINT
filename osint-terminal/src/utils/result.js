/** Build a key/value row for result boxes */
export function row(key, val, valClass = '') {
  return `<div class="r-row">
    <span class="r-key">${key}</span>
    <span class="r-val ${valClass}">${val}</span>
  </div>`
}

/** Horizontal separator */
export function sep() {
  return '<hr class="r-sep" />'
}

/** Info note at bottom */
export function info(msg) {
  return `<div class="r-info">ℹ ${msg}</div>`
}

/** Increment query counter stored in localStorage-like ref  */
export function rand(min, max) {
  return Math.random() * (max - min) + min
}
