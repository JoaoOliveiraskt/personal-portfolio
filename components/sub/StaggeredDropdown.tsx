import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import SocialIcon from "./SocialIcon";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative hidden med:block top-0 right-0"
    >
      <button

        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center px-1 py-1 rounded-lg text-primary border shadow-sm shadow-slate-500"
      >
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top"}}

        className="absolute flex flex-col gap-2 p-1 rounded-bl-lg border-l border-b border-r rounded-br-lg border bg-background top-10 right-0 w-48 overflow-hidden"
      >
        {Socials.map((social) => (
         <motion.li key={social.name}>
           <motion.a
           href={social.link}
            target="blank"        
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="cursor pointer flex flex-row items-center justify-around gap-1 hover:bg-accent w-full h-9 py-1 px-2 rounded-md text-sm"
            >
           <SocialIcon 
            Icon={social.icon}
            hoverColor={social.hoverColor}
            name={social.name}
            />


            <p className="text-primary transition-colors">{social.name}</p>
            <HiArrowTopRightOnSquare className="text-primary" />
          </motion.a>
         </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
