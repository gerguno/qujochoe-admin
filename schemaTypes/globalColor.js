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
      description: 'HEX format. By default is in difference effect (!)',
      type: 'string',
    }),
    defineField({
      name: 'differenceEffect',
      title: 'Difference Effect',
      type: 'boolean',
      initialValue: true,
      description: 'Foreground Color will be in the difference mode above the Background Color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      backgroundColor: 'backgroundColor',
      uiColor: 'uiColor',
      foregroundColor: 'foregroundColor',
      differenceEffect: 'differenceEffect',
    },
    prepare({ backgroundColor, uiColor, foregroundColor, differenceEffect, title }) {
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
            style: {  color: 'white', color: differenceEffect ? 'white' : 'black', mixBlendMode: differenceEffect ? 'difference' : 'unset', fontFamily: 'monospace', fontSize: '8px' },
          }, 'BG'),
        ),
        React.createElement(
          'div', 
          { style: { position: 'absolute', top: 0, right: 0, backgroundColor: backgroundColor, height: '50%', width: '50%' } },
          React.createElement(
            'div', 
            { style: { position: 'absolute', zIndex: 2, top: 0, right: 0, backgroundColor: foregroundColor, height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',  mixBlendMode: differenceEffect ? 'difference' : 'unset'}},
            React.createElement(
              'span', 
              { style: { color: 'black', fontFamily: 'monospace', fontSize: '8px', color: differenceEffect ? 'white' : 'black', mixBlendMode: differenceEffect ? 'difference' : 'unset' } },
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
