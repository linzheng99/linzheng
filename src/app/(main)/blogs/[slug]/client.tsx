'use client'

import { PortableText } from "@portabletext/react"

import PortableTextCodeBlock from "@/components/portable-text-components/portable-text-code-block"
import PortableTextImage from "@/components/portable-text-components/portable-text-image"
import { type Blog } from "@/sanity/types"

const components = {
  types: {
    image: PortableTextImage,
    code: PortableTextCodeBlock,
  },
}

export default function BlogClient({ blog }: { blog: Blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <PortableText value={blog.content} components={components} />
    </div>
  )
}
