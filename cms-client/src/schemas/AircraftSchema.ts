import { buildSchema } from '@camberi/firecms';
import { Aircraft } from "@the-flying-pupo/schema";

export const categorySchema = buildSchema({
  customId: false,
  name: 'Category',
  properties: {
    model: {
      title: "model",
      validation: { required: true },
      dataType: 'map',
      properties: {
        code: {
          title: 'Code',
          dataType: 'string',
          validation: { required: true },
        },
        text: {
          title: 'text',
          dataType: 'string',
          validation: { required: true },
        },
      }
    },
    identification: {
      title: "model",
      validation: { required: true },
      dataType: 'map',
      properties: {
        modes: {
          title: 'text',
          dataType: 'string',
        },
        registration: {
          title: 'registration',
          dataType: 'string',
        },
        serialNo: {
          title: 'serialNo',
          dataType: 'string',
        },
      }
    },
  }
});