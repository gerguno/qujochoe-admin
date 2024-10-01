import { defineType, defineField } from 'sanity';
import React from 'react';

const globalColorSchema = defineType({
  name: 'global_color',
  title: 'Global Color',
  type: 'document',
  // icon: ColorWheelIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Background Color in HEX format',
      type: 'string',
    }),
    defineField({
      name: 'uiColor',
      title: 'UI Color',
      description: 'UI Color in HEX format (usually a foreground color in difference mode above a background color)',
      type: 'string',
    }),
    defineField({
      name: 'foregroundColor',
      title: 'Foreground Color',
      description: 'Foreground Color in HEX format',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      backgroundColor: 'backgroundColor',
      uiColor: 'uiColor',
      foregroundColor: 'foregroundColor',
    },
    prepare({ backgroundColor, uiColor, foregroundColor, title }) {
      const media = React.createElement('div', {
        style: {
          display: 'flex',
          height: '100%',
          width: '100%',
          borderRadius: '3px',
          overflow: 'hidden',
        },
      }, 
      React.createElement('div', { style: { flex: 1, backgroundColor, height: '100%' } }),
      React.createElement('div', { style: { flex: 1, backgroundColor: uiColor, height: '100%' } }),
      React.createElement('div', { style: { flex: 1, backgroundColor: foregroundColor, height: '100%' } })
      );

      return {
        title: title || `BG: ${backgroundColor}, UI: ${uiColor}, FG: ${foregroundColor}`,
        media: media,
      };
    },
  },
});

export default globalColorSchema;
