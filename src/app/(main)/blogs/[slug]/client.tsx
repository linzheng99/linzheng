'use client'

import { PortableText, type PortableTextComponents } from "@portabletext/react"
import { format } from 'date-fns'
import { CalendarRange, ScrollText } from "lucide-react"
import Image from "next/image"

import DottedSeparator from "@/components/dotted-separator"
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
import { type Blog } from "@/sanity/types"

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

export default function BlogClient({ blog }: { blog: Blog }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-4">
          <div className="flex flex-col gap-2 h-full">
            <div className="w-full flex justify-center mb-2">
              <div className="w-24 h-24 rounded-sm relative p-2 border-2 border-dashed border-white">
                <div className="w-full h-full relative ring-4 ring-white">
                  <Image
                    src={'/avatar.jpeg'}
                    fill
                    alt={'author image'}
                  />
                </div>
              </div>
            </div>
            <DottedSeparator dotSize="8px" gapSize="2px" color="#ec05f0" />
            <h1 className="text-2xl font-bold text-center">{blog.title}</h1>
            <p className="text-sm text-gray-300 line-clamp-3">{blog.description}</p>
            <div className="flex justify-end items-center gap-4 mt-auto">
              <p className="text-sm text-gray-300 flex items-center gap-1">
                <ScrollText className="w-4 h-4" />
                {blog.category}
              </p>
              <p className="text-sm text-gray-300 flex items-center gap-1">
                <CalendarRange className="w-4 h-4" />
                {format(new Date(blog.publishedAt), 'yyyy-MM-dd')}
              </p>
            </div>
          </div>
        </div>
        <div className=" col-span-12 md:col-span-8">
          <div className="w-full h-[300px] relative">
            <Image
              src={blog.coverImage}
              fill
              className="object-cover rounded-2xl"
              alt={'cover image'}
            />
          </div>
        </div>
      </div>
      <PortableText value={blog.content} components={components} />
    </div>
  )
}
