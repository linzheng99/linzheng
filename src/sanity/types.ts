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

export type Blog = {
  _id: string
  _createdAt: string
  title: string
  slug: string
  coverImage: string
  description: string
  content: PortableTextBlock[]
  publishedAt: string
}
