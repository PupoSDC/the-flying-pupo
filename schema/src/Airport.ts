export interface Country {
    name: string;
    code: string;
    id: number;
}

export type Position = {
    latitude: number;
    longitude: number;
    country?: Country;
    region?: {
        city: string;
    };
};

export interface Airport {
    name: string;
    code: string;
    position: Position;
}
