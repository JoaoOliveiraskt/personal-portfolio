import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollYProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress);
    
    return (
    <motion.div
        style={{
          scaleX,
          background: "linear-gradient(to right, #a855f7, #06b6d4);",
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "1px",
          zIndex: 100,
        }}
      />
    )
}