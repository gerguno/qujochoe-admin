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
  ],
});

export default personSchema;
