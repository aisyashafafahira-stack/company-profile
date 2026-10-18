import { portfolioData } from '../data/contentData';
import Card from '../components/Card';

export default function Portfolio() {
  // Hanya mengambil proyek pertama
  const singlePortfolio = portfolioData.slice(0, 1);

  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Portofolio Proyek</h1>
        <p className="text-slate-600 max-w-xl mx-auto">
          Hasil karya dan proyek digital unggulan yang sukses kami kembangkan.
        </p>
      </div>

      <div className="max-w-md mx-auto">
        {singlePortfolio.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            image={item.image}
            client={item.client}
            description={`Kategori: ${item.category}`}
          />
        ))}
      </div>
    </div>
  );
}