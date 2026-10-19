import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-28 overflow-hidden">
        {/* Glow Ambient Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] adobe-glow-light pointer-events-none -z-10"></div>

        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Kreativitas Tanpa Batas dengan{' '}
            <span className="adobe-gradient-text">
              Inovasi Kode
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed font-normal">
            Luminary Studio mengintegrasikan keahlian rekayasa perangkat lunak modern untuk menghadirkan platform digital yang elegan, cepat, dan terintegrasi.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/services"
              className="px-8 py-3.5 rounded-full adobe-btn-primary text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              Jelajahi Layanan
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-gray-100 text-gray-800 font-medium border border-gray-200 hover:bg-gray-200 transition-all hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0055fe] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Performa Tinggi</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Arsitektur aplikasi teroptimasi yang memprioritaskan kecepatan akses dan keandalan sistem.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7b2cbf] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Desain Murni</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Tampilan antarmuka berstandar industri dengan pengalaman pengguna (*User Experience*) bernilai tinggi.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all group">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-[#d90429] flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
              🔒
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Keamanan Terjamin</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Perlindungan data modern berbasis standar enkripsi internasional untuk setiap solusi digital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}