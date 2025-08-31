export default {
  name: 'category',
  title: 'Kategorije',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv kategorije',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: 'description',
      title: 'Opis kategorije',
      type: 'text',
      rows: 3
    },
    {
      name: 'image',
      title: 'Slika kategorije',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt tekst',
          type: 'string',
        }
      ]
    },
    {
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'isActive',
      title: 'Aktivna kategorija',
      type: 'boolean',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image'
    }
  }
}