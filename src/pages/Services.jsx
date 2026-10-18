import { servicesData } from '../data/contentData';
import Card from '../components/Card';

export default function Services() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Layanan & Produk Kami</h1>
        <p className="text-slate-600 max-w-xl mx-auto">Berbagai solusi teknologi yang dirancang khusus untuk memenuhi kebutuhan bisnis dan digitalisasi Anda.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicesData.map((service) => (
          <Card key={service.id} title={service.title} description={service.description} icon={service.icon} />
        ))}
      </div>
    </div>
  );
}