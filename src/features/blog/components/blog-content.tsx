'use client'

import { PortableText, type PortableTextBlock, type PortableTextComponents } from "@portabletext/react"
import { motion, useScroll } from "motion/react"

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
  console.log(content)
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
      <PortableText value={content} components={components} />
    </>
  )
}
