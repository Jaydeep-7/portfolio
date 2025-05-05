import { motion } from 'framer-motion';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    id: 1,
    name: 'React',
    icon: '⚛️',
    category: 'frontend',
  },
  {
    id: 2,
    name: 'TypeScript',
    icon: '📘',
    category: 'frontend',
  },
  {
    id: 3,
    name: 'Node.js',
    icon: '🟢',
    category: 'backend',
  },
  {
    id: 4,
    name: 'MongoDB',
    icon: '🍃',
    category: 'backend',
  },
  {
    id: 5,
    name: 'Git',
    icon: '📦',
    category: 'tools',
  },
  {
    id: 6,
    name: 'Docker',
    icon: '🐳',
    category: 'tools',
  },
  // Add more skills as needed
];

const Skills = () => {
  const categories = ['frontend', 'backend', 'tools'];

  return (
    <section id="skills" className="section-padding">
      <div className="container-padding mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-secondary">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/50 rounded-lg p-6 border border-tertiary/20"
              >
                <h3 className="text-xl font-semibold mb-6 capitalize">
                  {category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div
                        key={skill.id}
                        className="flex items-center gap-2 text-tertiary hover:text-secondary transition-colors duration-300"
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 