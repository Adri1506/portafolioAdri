import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold font-display text-navy-900 mb-4">
        404
      </h1>
      <p className="text-slate-500 mb-8">
        Página no encontrada. El proyecto que buscas no existe.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
