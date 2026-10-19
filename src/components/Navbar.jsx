import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Kiri: Logo + Menu Navigasi Berdampingan Ala Adobe */}
        <div className="flex items-center gap-6">
          {/* Logo Luminary Studio */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div 
              className="w-9 h-9 rounded-lg p-[2px] transition-transform group-hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0055fe, #7b2cbf, #d90429)' }}
            >
              <div className="w-full h-full bg-white rounded-[6px] flex items-center justify-center font-black text-sm text-gray-900 group-hover:bg-transparent group-hover:text-white transition-all">
                LS
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900">
              Luminary<span className="text-[#0055fe]">Studio</span>
            </span>
          </Link>

          {/* Navigasi Kiri Rapat (Selalu Tampil) */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Kanan: Tombol Aksi Khas Adobe */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full text-xs font-semibold adobe-btn-primary text-white shadow-md shadow-blue-500/20 hover:opacity-95 transition-all"
          >
            Start Project
          </Link>
        </div>
      </div>
    </header>
  );
}