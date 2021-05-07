import { buildSchema } from '@camberi/firecms';
import { Airport } from "@the-flying-pupo/schema";
import { AirportField } from '../components/AirportField';

export const airportSchema = buildSchema({
    customId: false,
    name: 'Airport',
    properties: {
        name: {
            title: 'Name',
            dataType: 'string',
            validation: { required: true },
        },
        code: {
            title: 'Code',
            dataType: 'string',
            validation: { required: true },
        },
        position: {
            title: "position",
            dataType: "map",
            validation: { required: true },
            config: {
                field: AirportField,
                customProps: {}
            },
            properties: {
                latitude: {
                    title: 'Latitude',
                    dataType: 'number',
                    validation: { required: true },
                },
                longitude: {
                    title: 'Longitude',
                    dataType: 'number',
                    validation: { required: true },
                },
                country: {
                    title: 'Country Code',
                    dataType: 'string',
                    validation: { required: true, max: 2 },
                },
            }
        }

    }
});