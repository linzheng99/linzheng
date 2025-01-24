import { type PortableTextBlock } from "next-sanity"

export type Project = {
  _id: string
  _createdAt: string
  name: string
  slug: string
  image: string
  url: string
  description: string
  content: PortableTextBlock[]
}
