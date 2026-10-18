import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            CodeCraft<span className="text-slate-800">.id</span>
          </Link>

          {/* Menu Navigasi Lengkap */}
          <div className="flex space-x-4 sm:space-x-8 font-medium text-slate-600 text-sm sm:text-base">
            <Link to="/" className="hover:text-blue-600 transition">Beranda</Link>
            <Link to="/about" className="hover:text-blue-600 transition">Tentang Kami</Link>
            <Link to="/services" className="hover:text-blue-600 transition">Layanan</Link>
            <Link to="/portfolio" className="hover:text-blue-600 transition">Portofolio</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Kontak</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}