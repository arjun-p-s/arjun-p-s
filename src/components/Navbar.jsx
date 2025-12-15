import { Github, Linkedin, Mail, Twitter, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/arjun-p-s" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/arjun-p-s-8b59652b6/" },
    { icon: Mail, href: "mailto:hai.arjunps@gmail.com" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[rgba(5,5,5,0.8)] backdrop-blur-md border-b border-[var(--glass-border)]">
      <div className="container mx-auto flex justify-between items-center h-[var(--nav-height)] px-6">
        <a href="#" className="text-2xl font-bold tracking-tighter hover:text-[var(--accent-primary)] transition-colors">
          Arjun P S<span className="text-[var(--accent-primary)]">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium uppercase tracking-wide hover:text-[var(--accent-primary)] transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--accent-primary)] transition-all group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="h-6 w-[1px] bg-[var(--glass-border)]"></div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-transform hover:-translate-y-1 duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[var(--text-primary)] hover:text-[var(--accent-primary)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[var(--nav-height)] left-0 w-full bg-[var(--bg-secondary)] border-b border-[var(--glass-border)] p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-top-10">
          <ul className="flex flex-col gap-4">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-lg font-medium hover:text-[var(--accent-primary)] transition-colors w-full text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-6 mt-4 pt-4 border-t border-[var(--glass-border)]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
