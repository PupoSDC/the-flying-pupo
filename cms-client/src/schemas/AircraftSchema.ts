import { buildSchema } from '@camberi/firecms';
import { Aircraft } from "@the-flying-pupo/schema";

export const aircraftSchema = buildSchema({
  customId: false,
  name: 'Aircraft',
  properties: {
    code: {
      title: 'Code',
      dataType: 'string',
      validation: { required: true },
    },
    modelName: {
      title: 'Model Name',
      dataType: 'string',
      validation: { required: true },
    },

    registration: {
      title: 'registration',
      dataType: 'string',
      validation: { 
        required: true,
        unique: true,
      },
    },
    serialNo: {
      title: 'serialNo',
      dataType: 'string',
    },
  }
});