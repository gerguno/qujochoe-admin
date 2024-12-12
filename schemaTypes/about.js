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
      name: 'additional_info',
      title: 'Additional Info',
      type: 'internationalizedArrayText',
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
