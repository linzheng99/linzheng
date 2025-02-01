import type { PortableTextBlock } from "@portabletext/types"

interface HeadingNode {
  id: string
  text: string
  level: number
  children: HeadingNode[]
}

export function processHeadings(blocks: PortableTextBlock[]): HeadingNode[] {
  const headings: HeadingNode[] = []
  const stack: HeadingNode[] = []

  blocks.forEach((block) => {
    if (block.style?.startsWith("h") && Number.parseInt(block.style.substring(1)) >= 2) {
      const level = Number.parseInt(block.style.substring(1))
      const text = block.children?.[0]?.text || ""
      const heading: HeadingNode = {
        id: block._key || "",
        text,
        level,
        children: [],
      }

      // Adjust level relative to h2
      const adjustedLevel = level - 2

      while (stack.length > 0 && stack[stack.length - 1].level >= adjustedLevel) {
        stack.pop()
      }

      if (adjustedLevel === 0) {
        headings.push(heading)
      } else if (stack.length > 0) {
        stack[stack.length - 1].children.push(heading)
      }

      stack.push(heading)
    }
  })

  return headings
}

