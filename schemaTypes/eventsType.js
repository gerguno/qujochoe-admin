import { defineType, defineField } from 'sanity';
import {TagIcon} from '@sanity/icons';

const eventsTypeSchema = defineType({
  name: 'events_type',
  title: 'Events Type',
  type: 'document',
  icon: TagIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title of an Event Type',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon of an Event Type',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug of an Event Type',
      type: 'slug',
      description: 'The slug needs to be the same for every language',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
        .toLowerCase()
        .replace(/\s+|\.+/g, '-')
        .slice(0, 96)
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default eventsTypeSchema;