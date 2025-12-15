import { motion } from 'framer-motion';
import BookabiteImg from '../../assets/images/Bookabite.png';
import CodetieImg from '../../assets/images/Codetie.png';
import BookshelfImg from '../../assets/images/Bookshelf.png';

const projects = [
  {
    title: " BookaBite ",
    desc: "It is an AI-powered, microservices-based restaurant reservation platform.",
    tags: ["React", "TypeScript", "Microservices", " Docker"],
    image: BookabiteImg,
    demoLink: "#",
    githubLink: "https://github.com/arjun-p-s/BookABite"
  },
  {
    title: "Codetie",
    desc: "It is a real-time messaging and video calling platform built with WebRTC and Socket.",
    tags: ["WebRTC", "Socket.io", "Node.js", "REST APIs",],
    image: CodetieImg,
    demoLink: "#",
    githubLink: "https://github.com/arjun-p-s/codeTie-web"
  },
  {
    title: "Bookshelf",
    desc: "It is a web app that lets users add, edit, update status, and manage book records easily.",
    tags: ["React", "Express", "MongoDB", "TypeScript"],
    image: BookshelfImg,
    demoLink: "#",
    githubLink: "https://github.com/arjun-p-s/BookStore-web"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Featured <span className="text-gradient">Projects</span></h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel overflow-hidden group hover:border-[var(--accent-primary)] transition-all duration-300"
            >
              <div className="h-48 bg-[var(--bg-secondary)] relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-secondary)] to-gray-800 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
                )}
                {!project.image && (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--text-secondary)] opacity-30 text-4xl font-bold">
                    PROJECT {index + 1}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">{project.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4 text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full border border-[var(--glass-border)] text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex justify-between items-center">
                  <a href={project.demoLink} className="text-sm font-bold text-[var(--accent-primary)] border-b border-[var(--accent-primary)] pb-0.5 hover:text-white hover:border-white transition-all">View Demo</a>
                  <a href={project.githubLink} className="text-sm text-[var(--text-secondary)] hover:text-white transition-colors">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="px-8 py-3 border border-[var(--glass-border)] rounded-full hover:bg-[var(--accent-primary)] hover:text-black hover:border-[var(--accent-primary)] transition-all duration-300 font-medium">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
}
