import React from "react";
import { motion } from "framer-motion";
import {
  pageVariants,
  pageTransition,
  pageStyle,
} from "../Header/pageTransitions";
import { PageHeader } from "../Common/CommonComponent";

const QueueExtracts = () => {
  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
      style={pageStyle}
    >
      <PageHeader label="Extract" pageTitle="Queued Extracts" />
    </motion.div>
  );
};

export default QueueExtracts;
