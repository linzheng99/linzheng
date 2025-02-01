'use client'

import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react"
import { Undo2 } from "lucide-react"
import { motion, useScroll } from "motion/react"
import Link from "next/link"

import PortableTextH1 from "@/components/portable-text-components/portable-text-block-h1"
import PortableTextH2 from "@/components/portable-text-components/portable-text-block-h2"
import PortableTextH3 from "@/components/portable-text-components/portable-text-block-h3"
import PortableTextH4 from "@/components/portable-text-components/portable-text-block-h4"
import PortableTextNormal from "@/components/portable-text-components/portable-text-block-normal"
import { PortableTextBlockquote } from "@/components/portable-text-components/portable-text-block-quote"
import PortableTextCodeBlock from "@/components/portable-text-components/portable-text-code-block"
import PortableTextImage from "@/components/portable-text-components/portable-text-image"
import PortableTextListBullet from "@/components/portable-text-components/portable-text-list-bullet"
import PortableTextListNumber from "@/components/portable-text-components/portable-text-list-number"
import PortableTextMarksCode from "@/components/portable-text-components/portable-text-marks-code"
import PortableTextMarksLink from "@/components/portable-text-components/portable-text-marks-link"
import { TableOfContents } from "@/components/table-of-contents"
import { processHeadings } from "@/lib/process-headings"

const components: PortableTextComponents = {
  block: {
    h1: PortableTextH1,
    h2: PortableTextH2,
    h3: PortableTextH3,
    h4: PortableTextH4,
    normal: PortableTextNormal,
    blockquote: PortableTextBlockquote,
  },
  list: {
    bullet: PortableTextListBullet,
    number: PortableTextListNumber,
  },
  types: {
    image: PortableTextImage,
    code: PortableTextCodeBlock,
  },
  marks: {
    code: PortableTextMarksCode,
    link: PortableTextMarksLink,
  },
}

export default function BlogContent({ content }: { content: PortableTextBlock[] }) {
  const { scrollYProgress } = useScroll()
  const headings = processHeadings(content)
  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          originX: 0,
          zIndex: 2,
          backgroundColor: "#ff0088",
        }}
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2 sticky top-4 self-start flex flex-col gap-4">
          <Link href="/blogs" className="w-10 h-10 bg-white/5 rounded-full border border-white/15 hover:border-white/25 transition-colors duration-300 items-center justify-center cursor-pointer hidden sm:flex">
            <Undo2 className="w-4 h-4" />
          </Link>
          <TableOfContents headings={headings} className="w-full" />
        </div>
        <div className="col-span-10">
          <PortableText value={content} components={components} />
        </div>
      </div>
    </>
  )
}
