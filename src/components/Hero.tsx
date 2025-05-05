import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="container-padding mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-secondary">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-tertiary mb-8">
            Full Stack Developer
          </h2>
          <p className="text-lg md:text-xl text-tertiary max-w-2xl mx-auto mb-12">
            I build exceptional digital experiences that make an impact.
            Specializing in creating beautiful, functional, and user-centered
            websites and applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="contact"
              className="btn-primary"
              smooth={true}
              duration={500}
            >
              Contact Me
            </Link>
            <a
              href="#projects"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({
                  behavior: 'smooth',
                });
              }}
            >
              View My Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero; 