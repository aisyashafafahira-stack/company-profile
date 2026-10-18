export default function About() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      {/* Sejarah Singkat */}
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Tentang Kami</h1>
        <p className="text-slate-600 leading-relaxed">
          Berawal dari sekumpulan mahasiswa Pendidikan Ilmu Komputer yang memiliki passion tinggi di bidang software engineering, CodeCraft.id kini berkembang menjadi tim profesional yang siap menghadirkan inovasi teknologi terbaik di Indonesia.
        </p>
      </div>

      {/* Visi & Misi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Visi</h3>
          <p className="text-slate-600">Menjadi perusahaan pengembang teknologi dan edukasi digital terkemuka yang inovatif dan berdaya saing global.</p>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-md border border-slate-100">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">Misi</h3>
          <ul className="list-disc list-inside text-slate-600 space-y-2">
            <li>Menyediakan layanan pembuatan web dan aplikasi mobile berkualitas tinggi.</li>
            <li>Mengembangkan talenta digital melalui pelatihan IT yang terstruktur.</li>
            <li>Memberikan solusi berbasis teknologi yang solutif bagi klien.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}