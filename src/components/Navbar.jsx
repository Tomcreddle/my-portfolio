export default function Navbar() {
  const tabs = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="flex justify-between items-center px-8 py-4 rounded-2xl border border-purple-500/20 bg-[#0b0b16]/80 backdrop-blur-xl shadow-lg shadow-purple-900/20">
        
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,.7)]">
            My Portfolio
          </span>
          <span className="text-white">.</span>
        </h1>

        <div className="flex items-center gap-4">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className="
                px-6 py-2
                rounded-full
                border border-purple-500/30
                bg-purple-500/10
                text-slate-300
                font-medium
                transition-all duration-300
                hover:bg-purple-600
                hover:text-white
                hover:border-purple-400
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(168,85,247,.45)]
              "
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}