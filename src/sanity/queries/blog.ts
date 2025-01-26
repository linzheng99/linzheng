import { groq } from 'next-sanity'

import { client } from '../lib/client'
import { type Blog } from '../types'

export async function getBlogs(limit?: number): Promise<Blog[]> {
  return await client.fetch(
    groq`*[_type == "blog"] | order(publishedAt desc) ${limit ? `[0..${limit - 1}]` : ""}{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      category,
      description,
      content[]{
        ...,
        _type == "image" => {
          "url": asset->url,
        },
      },
      publishedAt,
    }`
  )
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return await client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
      category,
      description,
      content[]{
        ...,
        _type == "image" => {
          "url": asset->url,
        },
      },
      publishedAt
    }`, { slug }
  )
}
