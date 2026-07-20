function Logo({ size = 28 }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="none" stroke="#c9a24b" strokeWidth="1.4" />
        <path
          d="M20 8 L22.9 15.8 L31.2 16.3 L24.7 21.5 L27 29.5 L20 24.9 L13 29.5 L15.3 21.5 L8.8 16.3 L17.1 15.8 Z"
          fill="#c9a24b"
        />
      </svg>
      <span style={{ fontFamily: 'var(--font-head)', letterSpacing: '0.08em' }}>
        <span style={{ color: '#c9a24b', fontSize: 13, display: 'block', lineHeight: 1 }}>5 STAR</span>
        <span style={{ color: '#f2f1ed', fontSize: 15, display: 'block', lineHeight: 1.2 }}>GLASS DESIGNER</span>
      </span>
    </div>
  )
}

export default Logo
