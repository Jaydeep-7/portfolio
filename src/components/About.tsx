import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/your-image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 border-2 border-secondary rounded-lg transform translate-x-4 translate-y-4 -z-10" />
          </div>

          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-secondary">Me</span>
            </h2>
            <p className="text-tertiary mb-6">
              I'm a passionate Full Stack Developer with a strong foundation in
              web technologies and a keen eye for creating intuitive user
              experiences. With expertise in both frontend and backend
              development, I strive to build applications that are not only
              visually appealing but also performant and scalable.
            </p>
            <p className="text-tertiary mb-8">
              My journey in web development started with a curiosity about how
              things work on the internet, which led me to dive deep into
              various technologies and frameworks. I enjoy solving complex
              problems and turning ideas into reality through clean and
              efficient code.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-tertiary">
                  B.S. in Computer Science<br />
                  University Name
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-tertiary">
                  X+ years of professional<br />
                  development experience
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 