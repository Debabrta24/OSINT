export function Toast({ toast }) {
  if (!toast) return null
  return (
    <div
      className="toast"
      style={{ borderColor: toast.color, color: toast.color }}
    >
      {toast.msg}
    </div>
  )
}
