import React from "react"
import { motion } from "framer-motion"

const navVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
      mass: 0.4,
      damping: 4,
      when: "beforeChildren",
      straggerChildren: 6,
    },
  },
}

const logoVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
      stiffness: 120,
      when: "beforeChildren",
      mass: 0.4,
      damping: 4,
    },
  },
}

const buttonVariants = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      yoyo: Infinity,
    },
  },
}

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  show: {
    pathLength: 1,
    transition: {
      duration: 4,
      ease: "easeInOut",
    },
  },
}

function Header() {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <motion.nav
          className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"
          variants={navVariants}
          initial="hidden"
          animate="show"
        >
          <motion.a
            initial={{ x: -12, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 1,
              },
            }}
            className="mr-5 hover:text-white"
          >
            First Link
          </motion.a>
          <motion.a
            initial={{ x: -12, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 2,
              },
            }}
            className="mr-5 hover:text-white"
          >
            Second Link
          </motion.a>
          <motion.a
            initial={{ x: -12, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 3,
              },
            }}
            className="mr-5 hover:text-white"
          >
            Third Link
          </motion.a>
          <motion.a
            initial={{ x: -12, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                type: "spring",
                delay: 4,
              },
            }}
            className="hover:text-white"
          >
            Fourth Link
          </motion.a>
        </motion.nav>
        <motion.a
          className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          variants={logoVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <motion.path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
              variants={pathVariants}
            ></motion.path>
          </motion.svg>
          <span className="ml-3 text-xl xl:block lg:hidden">Pandora</span>
        </motion.a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <motion.button
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            variants={buttonVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
          >
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <motion.path
                d="M5 12h14M12 5l7 7-7 7"
                variants={pathVariants}
              ></motion.path>
            </svg>
          </motion.button>
        </div>
      </div>
    </header>
  )
}

export default Header

// https://tailblocks.cc/
