export const fadeIn = (delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration,
        ease: "easeInOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren: number, delayChildren: number = 0) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const slideInLeft = (delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideInRight = (delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const scaleIn = (delay: number = 0, duration: number = 0.5) => {
  return {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};