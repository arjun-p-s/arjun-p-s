import { motion } from 'framer-motion';
// import GeometricBackground from '../3d/GeometricBackground';

const skills = [
  { category: "Frontend ", items: ["React", "Redux", "TypeScript", "Next.js", "Three.js", "Tailwind CSS", "Framer Motion", "Emotion CSS", "WebGL"] },
  { category: "Backend ", items: ["Node.js", "REST APIs", "Express", "Microservices", "MongoDB", "MySQL", "JWT Authentication", "WebRTC", "Socket.io"] },
  { category: "DevOps, Testing & Tooling", items: ["Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Render", "jest"] }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* <GeometricBackground /> */}
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Technical <span className="text-gradient">Skills</span></h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 hover:-translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-[var(--accent-secondary)]">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-[var(--bg-secondary)] border border-[var(--glass-border)] rounded-lg text-[var(--text-secondary)] text-sm font-medium hover:border-[var(--accent-primary)] hover:text-[var(--text-primary)] transition-all cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
