

const Contact = () => {
  return (
    <section id="contact" className="section-padding container mx-auto px-6 text-center">
      <div className="max-w-3xl mx-auto glass-panel p-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work <span className="text-gradient">Together</span></h2>
        <p className="text-[var(--text-secondary)] text-lg mb-10">
          Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
        </p>
        <a
          href="mailto:hai.arjunps@gmail.com"
          className="inline-block px-10 py-4 bg-[var(--accent-primary)] text-black font-bold rounded-full hover:bg-[var(--accent-secondary)] transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
};

export default Contact;
