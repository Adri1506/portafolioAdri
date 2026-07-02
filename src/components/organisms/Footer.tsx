import SocialLinks from "@/components/molecules/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold font-display text-white">
              Adrián Zamorano
            </p>
            <p className="text-sm text-slate-400 font-mono mt-1">
              Ingeniero en Informática · SDD con IA
            </p>
          </div>
          <SocialLinks variant="footer" />
        </div>
        <div className="mt-8 pt-6 border-t border-navy-700 text-center">
          <p className="text-xs text-slate-500">
            &copy; {currentYear} Adrián Zamorano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
