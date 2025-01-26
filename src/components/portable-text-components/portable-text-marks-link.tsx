import type { PortableTextMarkComponent } from "@portabletext/react"
import Link from "next/link"

interface SanityLink {
  _type: "link"
  href: string
}

const PortableTextMarksLink: PortableTextMarkComponent<SanityLink> = ({ children, value }) => {
  const href = value?.href || ""
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className='text-lime-300 hover:underline'>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className='text-lime-300 hover:underline'>
      {children}
    </Link>
  )
}

export default PortableTextMarksLink
