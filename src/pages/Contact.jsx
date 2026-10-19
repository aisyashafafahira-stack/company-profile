import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Semua kolom wajib diisi!');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-800 text-center mb-4">Contact Us</h1>
      <p className="text-slate-600 text-center mb-12">Punya pertanyaan atau ingin bekerja sama? Kirimkan pesan kepada kami.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-xl shadow-md border border-slate-100">
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-4">Informasi Kontak</h3>
          <p className="text-slate-600 mb-2">📍 Jl. Setiabudi No. 123, Bandung, Jawa Barat</p>
          <p className="text-slate-600 mb-2">📧 info@LuminaryStudio</p>
          <p className="text-slate-600 mb-4">📞 +62 812-3456-7890</p>

          <h4 className="font-semibold text-slate-800 mt-6 mb-2">Media Sosial</h4>
          <div className="flex space-x-4 text-blue-600 font-medium">
            <span className="hover:underline cursor-pointer">LinkedIn</span>
            <span className="hover:underline cursor-pointer">Instagram</span>
            <span className="hover:underline cursor-pointer">GitHub</span>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="bg-green-50 text-green-700 p-4 rounded-lg text-center font-medium">
              Terima kasih! Pesan Anda berhasil dikirim.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
              <div>
                <label className="block text-slate-700 font-medium mb-1">Nama</label>
                <input
                  type="text"
                  className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-slate-700 font-medium mb-1">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full border border-slate-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition">
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}