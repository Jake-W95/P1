import { motion } from "framer-motion";

const Jumbo = () => {
  return (
    <div className="jumbo-wrap col-12">
      <div className="jumbo-text">
        <motion.h1
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", duration: 1, ease: "easeInOut" }}
        >
          P1
        </motion.h1>
        <div className="dashed-line"></div>
        <motion.p
          initial={{ x: "-100vw" }}
          animate={{ x: "0" }}
          transition={{ type: "spring", bounce: "0.5", duration: 2, ease: [0.17, 0.67, 0.83, 0.67] }}
        >
          {" "}
          Fuel your passion
        </motion.p>
      </div>
    </div>
  );
};

export default Jumbo;
