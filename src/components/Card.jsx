export default function Card({ title, description, icon, image, role, client }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-6 border border-slate-100 flex flex-col justify-between">
      <div>
        {icon && <div className="text-4xl mb-4">{icon}</div>}

        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
        )}

        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        {role && <p className="text-blue-600 font-medium text-sm mb-2">{role}</p>}
        {client && <p className="text-xs text-slate-400 mb-2">Klien: {client}</p>}
        {description && <p className="text-slate-600 text-sm">{description}</p>}
      </div>
    </div>
  );
}