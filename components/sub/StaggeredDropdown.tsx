import { motion } from "framer-motion";
import { useState } from "react";
import { Socials, Links } from "@/constants";
import { RiMenu3Fill } from "react-icons/ri";
import { FiArrowDown } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import SocialIcon from "./SocialIcon";
import { Button } from "../ui/button";
import Link from "next/link";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative hidden med:block top-0 right-0"
    >
      <Button

        onClick={() => setOpen((pv) => !pv)}
        className="flex bg-background hover:bg-accent items-center justify-center h-9 w-9 rounded-lg text-primary  shadow-sm shadow-zinc-700"
      >
        <motion.span variants={iconVariants} className="text-lg">
          <RiMenu3Fill />
        </motion.span>
      </Button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top"}}

        className="absolute flex flex-col p-1 rounded-bl-lg border-l border-b border-r rounded-br-lg border bg-background top-14 right-0 w-48 overflow-hidden"
      >
        <motion.feSpotLight className="">
          {Links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              variants={itemVariants}
              className="cursor-default flex items-center gap-3 hover:bg-accent w-full h-9 py-1 px-4 rounded-md text-base font-medium"
            >
              <p className="text-primary">{link.name}</p>
              <FiArrowRight className="text-text" />
            </motion.a>
          ))}
            <Link
              href="/profile"
              className="flex items-center text-base font-medium cursor-default px-4 h-8 hover:bg-accent rounded-lg hover:text-foreground"
            >
          <motion.div variants={itemVariants} className="flex gap-3">
              <span> Profile</span>
              <GoArrowUpRight className="text-text" />
          </motion.div>
            </Link>
        {Socials.map((social) => (
           <motion.a
           key={social.name}
           href={social.link}
            target="blank"        
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="cursor-default pointer flex flex-row items-center gap-3 hover:bg-accent w-full h-9 py-1 px-3 rounded-md font-medium"
            >
           <SocialIcon 
            Icon={social.icon}
            hoverColor={social.hoverColor}
            name={social.name}
            />


            <p className="text-primary transition-colors">{social.name}</p>
            <GoArrowUpRight className="text-text" />
          </motion.a>
        ))}
        </motion.feSpotLight>
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
