import { Link } from 'react-router-dom';
import { servicesData } from '../data/contentData';
import Card from '../components/Card';

export default function Home() {
  return (
    <div>
      <section className="bg-linear-to-r from-blue-700 to-indigo-900 text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Teks utama dibuat putih tebal agar kontras */}
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 text-white drop-shadow-md">
            Solusi Digital & Pengembangan Software Terdepan
          </h1>
          <p className="text-lg text-blue-100 mb-8 font-medium">
            Kami membantu mewujudkan ide dan kebutuhan digital Anda melalui teknologi web dan mobile modern.
          </p>
          <Link to="/services" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-50 transition inline-block">
            Lihat Layanan Kami
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Tentang CodeCraft.id</h2>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
          CodeCraft.id adalah perusahaan teknologi informasi yang berfokus pada pembuatan perangkat lunak berkualitas tinggi, desain UI/UX interaktif, serta solusi digital bagi institusi pendidikan dan korporat.
        </p>
      </section>

      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Layanan Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <Card key={service.id} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}