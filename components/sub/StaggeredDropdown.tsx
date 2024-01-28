import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="relative hidden med:block"
    >
      <button

        onClick={() => setOpen((pv) => !pv)}
        className="flex items-center px-2 py-2 rounded-full text-slate-50 border border-zinc-600 shadow-sm shadow-slate-500"
      >
        <motion.span variants={iconVariants}>
          <FiChevronDown />
        </motion.span>
      </button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top"}}

        className="absolute flex flex-col gap-2 p-1 rounded-bl-lg border-l border-b border-r rounded-br-lg border-zinc-600  bg-[#000000] top-12 right-0 w-48 overflow-hidden"
      >
        {Socials.map((social) => (
          <motion.a
            target="blank"
            href={social.link}
            key={social.name}
            variants={itemVariants}
            onClick={() => setOpen(false)}
            className="cursor-default flex flex-row items-center justify-around gap-1 hover:bg-[#434343b3] w-full h-9 py-1 px-2 rounded-md text-sm"
          >
            <motion.span
            variants={actionIconVariants}
            >
            <Image
              src={social.src}
              alt={social.name}
              title={social.name}
              width={24}
              height={24}
            />
            </motion.span>

            <p className="text-gray-300 hover:text-white transition-colors">{social.name}</p>
            <HiArrowTopRightOnSquare className="text-white" />
          </motion.a>
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
