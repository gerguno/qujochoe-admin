import {defineConfig, defineField} from 'sanity';
import {visionTool} from '@sanity/vision';
import {internationalizedArray} from 'sanity-plugin-internationalized-array'
import schemas from './schemaTypes';
import {structureTool} from 'sanity/structure'
import {CalendarIcon, CogIcon, DocumentTextIcon, UsersIcon, BookIcon, DropIcon, TagsIcon} from '@sanity/icons';
import { QIcon } from './components/QIcon';
import {colorInput} from '@sanity/color-input'

export default defineConfig({
  name: 'default',
  title: 'Qujochoe Admin',
  icon: QIcon,
  projectId: 'h8ta33uq',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: S =>
        S.list()
          .title('Qujochoe Dashboard')
          .items([
            S.listItem()
              .title('Events')
              .icon(CalendarIcon)
              .child(
                S.list()
                  .title('Events by Year')
                  .items(
                    Array.from({ length: new Date().getFullYear() - 2000 }, (_, index) => {
                      const year = 2001 + index;
                      return S.listItem()
                        .title(String(year))
                        .child(
                          S.documentList()
                            .title(`Events in ${year}`)
                            .filter('_type == "events" && date_time match $year')
                            .params({ year: `${year}` }) 
                            .defaultOrdering([{ field: 'date_time', direction: 'desc' }])
                        );
                    }).reverse() // Reverse to show latest years first
                  )
              ),
            S.listItem()
              .title('About')
              .icon(DocumentTextIcon)
              .id('about')   
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
                  .title('About')
              ),
            S.listItem()
              .title('Datenschutz')
              .icon(BookIcon)
              .id('datenschutz')
              .child(
                S.document()
                  .schemaType('datenschutz')
                  .documentId('datenschutz')
                  .title('Datenschutz')
              ),
            
            // Divider
            S.divider(),
            
            // Global Settings Section
            S.listItem()
              .title('Global Settings')
              .id('globalSettings')
              .icon(CogIcon)
              .child(
                S.list()
                  .title('Global Settings')
                  .items([
                    S.documentTypeListItem('events_type')
                      .title('Event Types')
                      .icon(TagsIcon),
                    S.documentTypeListItem('person')
                      .title('People')
                      .icon(UsersIcon),
                    S.documentTypeListItem('global_color')
                      .title('Global Colors')
                      .icon(DropIcon),
                  ])
              ),
          ])
    }),
    colorInput(),
    visionTool(),
    internationalizedArray({
      languages: [
        {id: 'de', title: 'Deutsch'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['de'],
      fieldTypes: [
        'string',
        'text',
      ],
    })
  ],
  schema: {
    types: schemas,
  },
})
