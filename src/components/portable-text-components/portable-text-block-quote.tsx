import type { PortableTextComponentProps } from "@portabletext/react"
import type { PortableTextBlock } from "@portabletext/types"

export const PortableTextBlockquote: React.FC<PortableTextComponentProps<PortableTextBlock>> = ({ children }) => {
  return (
    <blockquote className="border-l-4 border-yellow-200 pl-4 py-2 my-4 italic text-gray-300">
      {children}
    </blockquote>
  )
}
