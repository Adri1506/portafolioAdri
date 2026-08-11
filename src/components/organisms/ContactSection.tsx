"use client";

import { useState } from "react";
import SectionHeader from "@/components/molecules/SectionHeader";
import { contactInfo } from "@/lib/data/contact";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const directLinks: Array<{ label: string; href: string; external: boolean }> = [
  { label: "Email", href: `mailto:${contactInfo.email}`, external: false },
  { label: "WhatsApp", href: contactInfo.whatsapp, external: true },
  { label: "LinkedIn", href: contactInfo.linkedin, external: true },
  { label: "GitHub", href: contactInfo.github, external: true },
];

const inputBase =
  "w-full bg-muted border rounded-sm min-h-[48px] px-3 text-foreground font-mono text-sm outline-none transition-colors";

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactForm, string>>
  >({});
  const [submitted, setSubmitted] = useState(false);

  function updateField(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (submitted) setSubmitted(false);
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof ContactForm, string>> = {};
    if (!form.name.trim()) nextErrors.name = "El nombre es obligatorio";
    if (!form.email.trim()) nextErrors.email = "El email es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      nextErrors.email = "Formato de email no válido";
    if (!form.message.trim()) nextErrors.message = "El mensaje es obligatorio";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setSubmitted(true);
  }

  function fieldClass(hasError: boolean) {
    return `${inputBase} ${
      hasError
        ? "border-danger focus:border-danger focus:ring-2 focus:ring-danger/20"
        : "border-border focus:border-primary focus:ring-2 focus:ring-primary/20"
    }`;
  }

  const labelClass =
    "mb-2 block font-mono text-xs uppercase tracking-wider text-foreground";

  return (
    <section id="contacto" className="py-20 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <SectionHeader number="05." title="Contacto" />

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Nombre
              </label>
              <input
                id="contact-name"
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={fieldClass(Boolean(errors.name))}
              />
              {errors.name && (
                <p className="mt-1 font-mono text-xs text-danger">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={fieldClass(Boolean(errors.email))}
              />
              {errors.email && (
                <p className="mt-1 font-mono text-xs text-danger">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Mensaje
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                className={`${fieldClass(Boolean(errors.message))} min-h-[120px] py-3`}
              />
              {errors.message && (
                <p className="mt-1 font-mono text-xs text-danger">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-sm bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-hover active:translate-y-0"
            >
              Enviar mensaje
            </button>

            {submitted && (
              <p role="status" className="font-mono text-sm text-success">
                Mensaje enviado ✓ — respondo en &lt; 24h
              </p>
            )}
          </form>

          <aside>
            <h3 className="font-mono text-xs uppercase tracking-wider text-primary">
              Contacto directo
            </h3>
            <ul className="mt-6 space-y-4">
              {directLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="link-underline inline-flex items-center gap-2 font-mono text-sm text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}