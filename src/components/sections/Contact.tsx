import { Download, Mail, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import { profile } from "../../data/profile";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { SectionTitle } from "../ui/SectionTitle";

const ROWS = [
  { icon: Mail, label: "email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: "linkedin", value: profile.linkedin, href: profile.linkedinUrl },
  { icon: GithubIcon, label: "github", value: profile.github, href: profile.githubUrl },
  { icon: MapPin, label: "ubicación", value: profile.location },
];

export function Contact(): ReactNode {
  return (
    <section id="contact" aria-label="Contacto" className="scroll-mt-20">
      <SectionTitle command="connect --socials" />
      <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <dl className="grid gap-3 sm:grid-cols-2">
          {ROWS.map((r) => (
            <div
              key={r.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3"
            >
              <r.icon aria-hidden="true" className="h-5 w-5 shrink-0 text-teal" />
              <div className="min-w-0">
                <dt className="font-mono text-xs text-violet">{r.label}</dt>
                <dd className="truncate text-sm text-ink">
                  {r.href ? (
                    <a
                      href={r.href}
                      target={r.href.startsWith("http") ? "_blank" : undefined}
                      rel={r.href.startsWith("http") ? "noreferrer" : undefined}
                      className="transition-colors hover:text-teal"
                    >
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            </div>
          ))}
        </dl>
        <a
          href={profile.cvPath}
          download
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-4 py-3 font-mono text-sm font-bold text-[#06231f] transition-opacity hover:opacity-90 sm:w-auto"
        >
          <Download aria-hidden="true" className="h-4 w-4" />
          Descargar CV (PDF)
        </a>
      </div>
    </section>
  );
}
