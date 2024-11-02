import React from "react";
import { motion } from "framer-motion";

const Avatar = ({ imageUrl, name }) => {
  return (
    <motion.div
      className="flex items-center justify-center w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute text-white text-lg font-semibold"></div>
    </motion.div>
  );
};

export default Avatar;
