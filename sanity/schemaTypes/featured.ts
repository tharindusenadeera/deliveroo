import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured menu categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
