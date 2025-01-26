import type { PortableTextMarkComponent } from "@portabletext/react"

const PortableTextMarksCode: PortableTextMarkComponent = ({ children }) => {

  return (
    <code className="px-1.5 py-0.5 mx-0.5 rounded-md bg-black font-mono text-sm text-purple-600"
    >
      {children}
    </code>
  )
}

export default PortableTextMarksCode

