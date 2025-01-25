import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import blogType from './blogType'
import projectType from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, blogType, blockContent],
}
