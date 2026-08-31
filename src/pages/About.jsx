import { motion } from "framer-motion";
import {
  UserGroupIcon,
  LightBulbIcon,
  ChartBarIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import Counter from "../components/Counter";

const About = () => {
  const skills = [
    {
      icon: UserGroupIcon,
      title: "Frontend Development",
      description:
        "HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap.",
    },
    {
      icon: LightBulbIcon,
      title: "Backend Development & Database",
      description:
        "PHP, MySQL, MariaDB, Node.js, Express.js, Supabase, Firebase",
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-black py-32">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Get to know more about my journey and expertise
          </h2>
          <div className="section-title-underline"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/profile.png"
                alt="Emmanuel"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#00ff88] rounded-lg -z-10"
            />
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Passionate about creating digital experiences that make a
              difference
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-300"
            >
             I'm Emmanuel Mwamba, a Software Developer and Startup Founder. I build practical digital products and technology solutions focused on solving real-world problems.
              <br /> <br />
              I'm the founder of EICTA Technologies, a Software Development, IT & Business Solutions Company. Through EICTA Technologies, I work on practical digital products and technology solutions focused on solving real-world problems.
            </motion.p>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00ff88]">
                  <Counter target={100} />
                </h4>
                <p className="text-sm text-gray-300">Lives Impacted</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00ff88]">
                  <Counter target={10} />
                </h4>
                <p className="text-sm text-gray-300">
                  Entrepreneuers Supported
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00ff88]">
                  <Counter target={5} />
                </h4>
                <p className="text-sm text-gray-300">Projects Completed</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00ff88]">
                  <Counter target={3} />
                </h4>
                <p className="text-sm text-gray-300">Countries Reached</p>
              </motion.div>
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-4 bg-white/5 rounded-lg"
              >
                <h4 className="text-2xl sm:text-3xl font-bold text-[#00ff88]">20+</h4>
                <p className="text-sm text-gray-300">Tech Awards</p>
              </motion.div> */}
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-[#00ff88]/10 rounded-lg">
                    <skill.icon className="w-6 h-6 text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">
                      {skill.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
