import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { StudioNavbar } from './sanity/components/studio-navbar'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'gwethbtl-leather',
  title: 'GWETHBTL Leather',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  studio: {
    components: {
      navbar: StudioNavbar,
    },
  },
  schema: { types: schemaTypes },
})
