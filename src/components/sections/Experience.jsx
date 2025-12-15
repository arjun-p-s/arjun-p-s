import { motion } from 'framer-motion';

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    period: "2024 - Present",
    desc: [
      "Built MERN stack applications with responsive UIs, secure APIs, and optimized databases.",
      "Developed a React + Tailwind food ordering platform.",
      "Implemented real-time reservations using Socket.IO (sub-100 ms updates) and an AI-powered booking assistant, boosting user engagement by 40%."
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "TopScore Solutions",
    period: "2023 - 2024",
    desc: [
      "Built and customized responsive, mobile-first WordPress websites.",
      "Collaborated with UI/UX and engineering teams to enhance features and deployment workflows."
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Work <span className="text-gradient">Experience</span></h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-[var(--glass-border)] md:left-1/2 md:-translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)] -translate-x-1/2 shadow-[0_0_10px_var(--accent-primary)] z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-[calc(50%-40px)] ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="glass-panel p-6 hover:border-[var(--accent-primary)] transition-colors duration-300">
                    <span className="text-sm text-[var(--accent-primary)] font-mono">{exp.period}</span>
                    <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                    <p className="text-[var(--text-secondary)] font-medium mb-4">{exp.company}</p>
                    <ul className={`text-[var(--text-secondary)] text-sm leading-relaxed list-disc list-inside space-y-1 ${index % 2 === 0 ? 'text-left' : 'md:text-right rtl:text-right'}`}>
                      {Array.isArray(exp.desc) ? exp.desc.map((point, i) => (
                        <li key={i}>{point}</li>
                      )) : exp.desc}
                    </ul>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-[calc(50%-40px)]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
