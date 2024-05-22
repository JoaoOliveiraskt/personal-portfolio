import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Socials, Links } from "@/constants";
import { RiMenu3Fill } from "react-icons/ri";
import { LuArrowUpRight } from "react-icons/lu";
import { LuArrowRight } from "react-icons/lu";
import SocialIcon from "./SocialIcon";
import { Button } from "../ui/button";
import Link from "next/link";
import Avatar from "./Avatar";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDocumentClick = (event: MouseEvent) => {
    const targetElement = event.target as Node;

    if (dropdownRef.current && !dropdownRef.current.contains(targetElement)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleDocumentClick);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, []);

  return (
    <motion.div
      ref={dropdownRef}
      animate={open ? "open" : "closed"}
      className=" hidden med:block top-0 right-0"
    >
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setOpen((pv) => !pv)}
        className="w-8 h-8 flex overflow-hidden items-center justify-center  rounded-full text-primary"
      >
        <Avatar width={40} height={40} className="object-cover m-auto" />
      </Button>

      <motion.ul
        initial={wrapperVariants.closed}
        variants={wrapperVariants}
        style={{ originY: "top" }}
        className="absolute w-full mx-auto p-2 rounded-bl-lg border-b border-r rounded-br-lg border bg-background top-14 right-0 overflow-hidden"
      >
        <motion.feSpotLight className="flex flex-col gap-1 ">
          {Links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              variants={itemVariants}
              className="cursor-default flex items-center justify-between hover:bg-accent w-full h-9 py-1 px-4 rounded-md text-base font-medium"
            >
              <p className="text-primary">{link.name}</p>
              <LuArrowRight className="text-text" />
            </motion.a>
          ))}
          <Link
            href="/profile"
            className="flex items-center text-base font-medium cursor-default px-4 h-9 hover:bg-accent rounded-lg hover:text-foreground"
          >
            <motion.div
              variants={itemVariants}
              className="flex w-full justify-between items-center"
            >
              <span className="text-primary"> Perfil</span>
              <LuArrowRight className="text-text" />
            </motion.div>
          </Link>
          <Link
            href="/profile/curriculo"
            className="flex items-center text-base font-medium cursor-default px-4 h-9 hover:bg-accent rounded-lg hover:text-foreground"
          >
            <motion.div
              variants={itemVariants}
              className="flex w-full justify-between items-center"
            >
              <span className="text-primary">Currículo</span>
              <LuArrowRight className="text-text" />
            </motion.div>
          </Link>
          {Socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="blank"
              variants={itemVariants}
              onClick={() => setOpen(false)}
              className="cursor-default pointer flex flex-row items-center gap-3 hover:bg-accent w-full h-9 py-1 px-4 rounded-md font-medium"
            >
              <SocialIcon
                Icon={social.icon}
                hoverColor={social.hoverColor}
                name={social.name}
              />

              <div className="flex w-full justify-between items-center">
                <p className="text-primary transition-colors">{social.name}</p>
                <LuArrowUpRight className="text-text" />
              </div>
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
