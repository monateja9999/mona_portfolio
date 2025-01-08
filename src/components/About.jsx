import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = React.useRef();

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    cardRef.current.style.transform = `rotateY(${x / 20}deg) rotateX(${-y / 20}deg)`;
  };

  const handleMouseLeave = () => {
    cardRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="xs:w-[250px] w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card transition-transform duration-300"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify"
      >
        Hi, I am Mona Teja Kurakula, a computer science graduate student at the University of Southern California
        with a strong focus on full-stack development, machine learning, and data analytics. With hands-on experience
        building scalable web and mobile applications, I have developed impactful solutions, including an app that
        streamlined student services and real-time sports analytics platforms at Matchday.ai. My roles at Shell and
        as a QA Tester further honed my ability to optimize systems and enhance user experiences. Passionate about
        solving real-world problems, I combine technical expertise with creativity to deliver innovative, end-to-end
        solutions. Let’s connect and create the future of tech together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
