import { defineType, defineField } from 'sanity';

const aboutSchema = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'intro_text',
      title: 'Intro Text',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'internationalizedArrayString',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'object',
      fields: [
        defineField({
          name: 'email_name',
          title: 'Email Appearance on a Website',
          type: 'string',
        }),
        defineField({
          name: 'email_url',
          title: 'Email',
          type: 'email',
        }),
      ],
    }),
    defineField({
      name: 'phone_number',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'zvr_zahl',
      title: 'Zvr-zahl',
      type: 'string',
    }),
    defineField({
      name: 'qujochoe_heute',
      title: 'Qujochoe Heute',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'additional_info',
      title: 'Additional Info',
      type: 'internationalizedArrayText',
    }),
    defineField({
      name: 'aktuelle_nutzer_innen',
      title: 'Aktuelle Nutzer_innen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'ehemalige_nutzer_innen',
      title: 'Ehemalige Nutzer_innen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'kunstlerinnen',
      title: 'Künstlerinnen',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'qujocho_ehemals',
      title: 'QujOchÖ Ehemals',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'person' }] }],
    }),
    defineField({
      name: 'logotypes',
      title: 'Logotypes',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook Link',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Link',
      type: 'url',
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio Link',
      type: 'url',
    }),
  ],
  preview: {
    title: 'About'
  },
  
});

export default aboutSchema;
