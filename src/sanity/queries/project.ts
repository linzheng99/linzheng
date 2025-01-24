import { groq } from 'next-sanity'

import { client } from '../lib/client'
import { type Project } from '../types'

export async function getProjects(): Promise<Project[]> {
  return await client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      description,
      content
    }`
  )
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      description,
      content
    }`, { slug }
  )
}
