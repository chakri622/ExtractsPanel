import React from "react";
import { motion } from "framer-motion";
import { pageVariants, pageTransition,pageStyle } from "../Header/pageTransitions";

export default function Logout() {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      style={pageStyle}
    >
      <h6>you have been successfully logged out!</h6>
    </motion.div>
  );
}
