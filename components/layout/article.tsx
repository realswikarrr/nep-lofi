import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const Layout = ({ children, delay }: any) => {
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: delay, type: "easeInOut" }}
      className="flex items-center justify-center flex-col h-[85%]"
    >
      <>{children}</>
    </motion.article>
  );
};

export default Layout;
