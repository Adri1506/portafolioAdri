import { contactInfo } from "@/lib/data/contact";

const socialLinks: Array<{ label: string; href: string; external: boolean }> = [
  { label: "Email", href: `mailto:${contactInfo.email}`, external: false },
  { label: "WhatsApp", href: contactInfo.whatsapp, external: true },
  { label: "LinkedIn", href: contactInfo.linkedin, external: true },
  { label: "GitHub", href: contactInfo.github, external: true },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border"
      style={{ background: "var(--gradient-abyss)" }}
    >
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-bold text-primary">
              AZ.
            </span>
            <div>
              <p className="font-display font-semibold">Adrián Zamorano</p>
              <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                Ingeniero en Informática · SDD con IA
              </p>
            </div>
          </div>

          <p className="font-mono text-xs text-muted-foreground">
            Santiago, Chile
          </p>

          <ul className="flex items-center gap-5">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link-underline inline-flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-mono text-xs text-muted-foreground">
            © {currentYear} Adrián Zamorano. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}