// Navbar.jsx
export default function Navbar() {
  const tabs = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className="flex justify-between items-center px-4 md:px-10 py-3 md:py-4 fixed w-full top-0 left-0 z-50"
      style={{
        background: 'rgba(10, 10, 20, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(139, 92, 246, 0.15)',
      }}
    >
      <h1 className="font-bold text-base md:text-xl tracking-wide" style={{ color: '#a78bfa' }}>
        My Portfolio <span style={{ color: '#ffffff' }}>.</span>
      </h1>

      <div className="flex items-center gap-1 md:gap-3">
        {tabs.map((tab) => (
          <a
            key={tab.label}
            href={tab.href}
            className="text-xs md:text-sm font-medium px-2 md:px-4 py-1.5 md:py-2 rounded-lg transition-all duration-300"
            style={{
              color: '#cbd5e1',
              border: '1px solid transparent',
              background: 'transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#a78bfa'
              e.currentTarget.style.border = '1px solid rgba(124, 58, 237, 0.5)'
              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#cbd5e1'
              e.currentTarget.style.border = '1px solid transparent'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  )
}