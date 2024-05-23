import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollYProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    
    return (
    <motion.div
        style={{
          scaleX,
          background: "linear-gradient(to right, #00f, #6a00ff);",
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "1.2px",
          zIndex: 100,
        }}
      />
    )
}