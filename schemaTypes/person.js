import { defineType, defineField } from 'sanity';
import {UserIcon} from '@sanity/icons';

const personSchema = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'full_name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'info',
      title: 'Information',
      type: 'string',
    }),
    defineField({
      name: 'Link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'image_description',
      title: 'Image Description',
      type: 'string',
    }),
    defineField({
      name: 'cv_de',
      title: 'CV (Deutsch)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'cv_en',
      title: 'CV (English)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'full_name',
      media: 'image',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    }
  },
});

export default personSchema;
