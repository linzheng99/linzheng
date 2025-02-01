import { motion, type Variants } from 'motion/react';

import { cn } from "@/lib/utils";

interface HeadingNode {
  id: string
  text: string
  level: number
  children: HeadingNode[]
}

interface TableOfContentsProps {
  headings: HeadingNode[]
  className?: string
}

const listVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08,
      delay: 0.2,
      type: 'spring',
      stiffness: 150,
      damping: 20,
    },
  },
} satisfies Variants

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 5,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
  },
} satisfies Variants

export function TableOfContents({ headings, className }: TableOfContentsProps) {
  const renderHeadings = (nodes: HeadingNode[]) => {
    return (
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={listVariants}
        className={cn("space-y-2 text-sm")}
      >
        {nodes.map((node) => (
          <motion.li
            variants={itemVariants}
            key={node.id}
            className={cn(
              "relative",
            )}
          >
            <span className="absolute left-0 top-1/2 w-2 h-px bg-gray-800" aria-hidden="true" />
            <a
              href={`#${node.id}`}
              className={cn(
                "block text-gray-400 hover:text-gray-100",
                "transition-colors duration-200",
              )}
            >
              {node.text}
            </a>
            {node.children.length > 0 && <div className="mt-2">{renderHeadings(node.children)}</div>}
          </motion.li>
        ))}
      </motion.ul>
    )
  }

  return (
    <nav className={cn("w-full max-w-xs", className)}>
      {renderHeadings(headings)}
    </nav>
  )
}

