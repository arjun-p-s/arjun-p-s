import { motion } from 'framer-motion';
import ProfileImg from '../../assets/images/Arjun.jpg';

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-gradient">Me</span></h2>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              I’m a MERN Stack Developer who enjoys solving problems and turning complex ideas into reliable, scalable web applications.
            </p>
            <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
              I’ve worked on real-world projects involving full-stack development, real-time systems, and scalable architectures, with a strong focus on code quality and long-term maintainability.

              Currently exploring backend/full-stack opportunities in Japan and actively preparing for relocation.
            </p>

            <div className="flex gap-4 mt-8">
              <div className="glass-panel p-4 text-center w-32">
                <span className="block text-3xl font-bold text-[var(--accent-primary)]">2+</span>
                <span className="text-sm text-[var(--text-secondary)]">Years Exp.</span>
              </div>
              <div className="glass-panel p-4 text-center w-32">
                <span className="block text-3xl font-bold text-[var(--accent-secondary)]">20+</span>
                <span className="text-sm text-[var(--text-secondary)]">Projects</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative md:w-3/5 md:mx-auto"
          >
            <div className="aspect-square rounded-2xl overflow-hidden glass-panel flex items-center justify-center bg-gradient-to-br from-[var(--glass-border)] to-transparent relative group">
              {/* Abstract Visual Placeholder */}
              <div className="absolute inset-0 bg-[var(--accent-primary)] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500"></div>
              <img
                src={ProfileImg}
                alt="Arjun P S"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
