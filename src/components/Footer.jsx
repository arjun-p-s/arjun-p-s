import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-[var(--glass-border)] bg-[var(--bg-secondary)] relative z-10">
      <div className="container flex flex-col justify-center items-center gap-2 text-center">
        <div>
          {/* <h3 className="text-xl font-bold mb-2">Arjun P S<span className="text-[var(--accent-primary)]">.</span></h3> */}
          <p className="text-[var(--text-secondary)] text-sm">
            Built and designed by Arjun P S.
          </p>
        </div>

        {/* <div className="flex gap-6">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Mail, href: "mailto:hello@example.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-transform hover:-translate-y-1 duration-300"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div> */}

        <div className="text-[var(--text-secondary)] text-xs">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
