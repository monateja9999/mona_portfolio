import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "Full-Stack Developer",
    "Data Analyst",
    "Machine Learning Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const text = texts[textIndex];

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Flex container for the image and text */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 text-center md:text-left">
          {/* Image Section */}
          <img
            src="../assets/profile_picture.png"
            alt="Mona Teja Kurakula"
            className="w-48 h-48 rounded-full object-cover border-8 border-[#915EFF] transition-transform duration-300 ease-in-out hover:scale-125"
          />

          {/* Text Section */}
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi <span className="animate-waving-hand">👋</span>, I'm{" "}
              <span className="text-[#915EFF]">Mona</span>
            </h1>
            <h1
              style={{ fontSize: "250%", fontWeight: "bold" }}
              className="text-white"
            >
              I am a{" "}
              <span className="text-[#915EFF]">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {text.split("").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 50, opacity: 0 }}
                      transition={{
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.div>
              </span>
            </h1>
            <div className="mt-5">
              <a
                href="../assets/Mona-Teja-Kurakula-Resume.pdf"
                download="Mona-Teja-Kurakula-Resume.pdf"
                style={{ textDecoration: "none" }}
              >
                <button
                  style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "#fff",
                    backgroundColor: "#915EFF",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "transform 0.2s ease-in-out",
                    zIndex: 10,
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  Download CV
                </button>
              </a>
            </div>
            {/* <ComputersCanvas /> */}
            {/* Scroll Indicator placed below Download CV button */}
            <div className="w-full flex justify-center items-center mt-10">
              <a href="#about">
                <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                  <motion.div
                    animate={{
                      y: [0, 24, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="w-3 h-3 rounded-full bg-secondary mb-1"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
