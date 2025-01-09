import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <motion.div
          key={technology.name}
          className="flex flex-col items-center"
          whileHover={{ scale: 1.1 }} // Scale up on hover
          whileTap={{ scale: 0.95 }} // Scale down on tap/click
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-blue-500 to-green-400 p-1">
            {/* Render the icon inside a styled container */}
            <div className="w-full h-full bg-tertiary rounded-full flex justify-center items-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
          {/* Display the technology name below the graphic */}
          <p className="text-center text-white text-sm mt-2">{technology.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
