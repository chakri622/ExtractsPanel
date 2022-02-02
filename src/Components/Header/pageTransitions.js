export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.1,
  },
};

export const pageTransition = {
  type: "spring",
  stiffness: 50,
};

export const pageStyle = {
  position: "absolute",
  width: "90%",
  marginTop: "70px",
  marginBottom: "40px",
  marginRight: "20px",
};
