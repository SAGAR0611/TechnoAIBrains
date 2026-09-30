"use client"

import { motion, type HTMLMotionProps, type Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

/**
 * Parent for a cascading reveal: wrap a list/grid of `<StaggerItem>`s in this
 * and each child animates in ~90ms after the previous one, once, on scroll.
 */
export function StaggerGroup({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={itemVariants} {...props}>
      {children}
    </motion.div>
  )
}
