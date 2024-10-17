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
      description: 'HEX format.',
      type: 'string',
    }),
    defineField({
      name: 'uiColor',
      title: 'UI Color',
      description: 'HEX format. The color to be used for non-interactive elements.',
      type: 'string',
    }),
    defineField({
      name: 'foregroundColor',
      title: 'Foreground Color',
      initialValue: '#FFFFFF',
      readOnly: true,
      description: 'By default is in difference effect (!)',
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
          height: '100%',
          width: '100%',
          borderRadius: '4px',
          overflow: 'hidden',
        },
      }, 
        React.createElement('div', { 
          style: { position: 'absolute', top: 0, left: 0, backgroundColor: backgroundColor, height: '100%', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }
        },
          React.createElement('span', {
            style: {  color: 'white', color: 'white', mixBlendMode: 'difference', fontFamily: 'monospace', fontSize: '8px' },
          }, 'BG'),
        ),
        React.createElement(
          'div', 
          { style: { position: 'absolute', top: 0, right: 0, backgroundColor: backgroundColor, height: '50%', width: '50%' } },
          React.createElement(
            'div', 
            { style: { position: 'absolute', zIndex: 2, top: 0, right: 0, backgroundColor: foregroundColor, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',  mixBlendMode: 'difference'}},
            React.createElement(
              'span', 
              { style: { color: 'black', fontFamily: 'monospace', fontSize: '8px', color: 'white', mixBlendMode: 'difference' } },
              'FG'
            )
          )
        ),        
        React.createElement('div', { 
          style: { position: 'absolute', zIndex: 2, bottom: 0, right: 0, backgroundColor: uiColor, height: '50%', width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' } 
        },
          React.createElement('span', {
            style: {  color: 'black', fontFamily: 'monospace', fontSize: '8px' },
          }, 'UI'),
        ),
      );

      return {
        title: title || `BG: ${backgroundColor}, UI: ${uiColor}, FG: ${foregroundColor}`,
        media: media,
      };
    },
  },
});

export default globalColorSchema;
