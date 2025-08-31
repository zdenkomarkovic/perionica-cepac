export default {
  name: 'product',
  title: 'Proizvodi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv proizvoda',
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
      name: 'brand',
      title: 'Brend',
      type: 'string',
      description: 'Naziv brenda proizvoda'
    },
    {
      name: 'category',
      title: 'Kategorija',
      type: 'reference',
      to: [{type: 'category'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'shortDescription',
      title: 'Kratak opis',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(200)
    },
    {
      name: 'description',
      title: 'Detaljan opis',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'H4', value: 'h4'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          }
        }
      ]
    },
    {
      name: 'images',
      title: 'Slike proizvoda',
      type: 'array',
      of: [
        {
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
        }
      ],
      validation: Rule => Rule.min(1).error('Dodajte najmanje jednu sliku')
    },
    {
      name: 'price',
      title: 'Cena',
      type: 'object',
      fields: [
        {
          name: 'amount',
          title: 'Iznos',
          type: 'number',
          validation: Rule => Rule.min(0)
        },
        {
          name: 'currency',
          title: 'Valuta',
          type: 'string',
          options: {
            list: [
              {title: 'RSD', value: 'RSD'},
              {title: 'EUR', value: 'EUR'}
            ]
          },
          initialValue: 'RSD'
        },
        {
          name: 'unit',
          title: 'Jedinica mere',
          type: 'string',
          placeholder: 'npr. po komadu, po litru, po kg'
        }
      ]
    },
    {
      name: 'inStock',
      title: 'Na stanju',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'featured',
      title: 'Izdvojen proizvod',
      type: 'boolean',
      initialValue: false,
      description: 'Prikazuje se na početnoj strani'
    },
    {
      name: 'order',
      title: 'Redosled prikaza',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta naslov',
          type: 'string',
          validation: Rule => Rule.max(60)
        },
        {
          name: 'metaDescription',
          title: 'Meta opis',
          type: 'text',
          rows: 2,
          validation: Rule => Rule.max(160)
        }
      ],
      options: {
        collapsible: true,
        collapsed: true
      }
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'images.0'
    }
  }
}