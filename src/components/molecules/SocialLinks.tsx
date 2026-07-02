import { Mail, Briefcase, Code2, MessageCircle } from "lucide-react";
import { contactInfo } from "@/lib/data/contact";

interface SocialLinksProps {
  variant?: "default" | "footer";
}

export default function SocialLinks({ variant = "default" }: SocialLinksProps) {
  const iconClass =
    variant === "footer"
      ? "w-5 h-5 text-slate-400 hover:text-white transition-colors"
      : "w-5 h-5 text-slate-500 hover:text-blue-600 transition-colors";

  const links = [
    { href: `mailto:${contactInfo.email}`, icon: Mail, label: "Email" },
    { href: contactInfo.linkedin, icon: Briefcase, label: "LinkedIn" },
    { href: contactInfo.github, icon: Code2, label: "GitHub" },
    { href: contactInfo.whatsapp, icon: MessageCircle, label: "WhatsApp" },
  ];

  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={iconClass}
          aria-label={link.label}
        >
          <link.icon />
        </a>
      ))}
    </div>
  );
}
