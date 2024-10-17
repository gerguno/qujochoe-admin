import { defineType, defineField } from 'sanity';

const eventsSchema = defineType({
  name: 'events',
  type: 'document',
  title: 'Events',
  groups: [
    {
      name: 'aggregator',
      title: 'Archive page fields',
    },
    {
      name: 'single',
      title: 'Single page fields',
    },
  ],
  fields: [
    defineField({
      name: 'q',
      title: 'Q',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'a',
      title: 'A',
      type: 'internationalizedArrayString',
      validation: (Rule) => Rule.required(),
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'title',
      title: 'Animated Title of the event',
      type: 'text',
      validation: (Rule) => Rule.required(),
      group: ['single'],
    }),
    defineField({
      name: 'slug',
      title: 'Slug of an Event',
      type: 'slug',
      options: {
        source: 'a[0].value',
        maxLength: 96,
        slugify: input => input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
      group: ['single'],
    }),
    defineField({
      name: 'event_type',
      title: "Event's Type",
      type: 'array',
      of: [{ type: 'reference', to: { type: 'events_type' } }],
      validation: (Rule) => Rule.required(),
      group: ['single'],
    }),
    defineField({
      name: 'date_time',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      group: ['aggregator'],
    }),
    defineField({
      name: 'small_description',
      title: 'Small Description',
      type: 'internationalizedArrayText',
      group: ['aggregator'],
    }),
    defineField({
      name: 'large_description',
      title: 'Large Description',
      type: 'internationalizedArrayText',
      group: ['single'],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'internationalizedArrayString',
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
            name: 'image', 
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.required(),
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'gallery_proportion',
      title: 'Gallery Proportion',
      type: 'string',
      options: {
        list: [
          { title: 'Landscape', value: 'landscape' },
          { title: 'Portrait', value: 'portrait' },
        ],
        layout: 'radio',
      },
      initialValue: 'landscape',
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'reference',
      to: { type: 'global_color' },
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'audios',
      title: "Event's Audios",
      type: 'array',
      of: [{ type: 'audio' }],
      group: ['single'],
    }),
    defineField({
      name: 'videos',
      title: "Event's Videos",
      type: 'array',
      of: [{ type: 'url' }],
      group: ['single'],
    }),
    defineField({
      name: 'event_series',
      title: "Event Series",
      description:
        'Please specify if current event is consisting of multiple series',
      type: 'boolean',
      initialValue: false,
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'series_part',
      title: "Event's Series Part",
      description: 'Specify the current series part of the event series',
      type: 'number',
      validation: rule =>
        rule.custom((currentValue, { document }) => {
          if (document && document.event_series && currentValue === undefined) {
            return `You must specify a series part if "Event Series" is turned on.`;
          }
          return true;
        }),
      hidden: ({ document }) => {
        if (!document) return true;
        return !document.event_series;
      },
      group: ['aggregator', 'single'],
    }),
    defineField({
      name: 'text_blocks_in_bottom',
      title: 'Text Blocks in Bottom',
      group: ['single'],
      type: 'array',
      of: [{ type: 'text_block' }],
    }),
  ],
  preview: {
    select: {
      title: 'a',
      mediaImage: 'gallery.0.asset', 
      date: 'date_time', 
    },
    prepare(selection) {
      const { title, mediaImage, date } = selection;
      const formattedDate = new Date(date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
  
      return {
        title: title[0].value, 
        subtitle: formattedDate,
        media: mediaImage,
      };
    },
  },
  
});

export default eventsSchema;
