export type Position = {
    latitude: number;
    longitude: number;
    country: string;
};

export interface Airport {
    name: string;
    code: string;
    position: Position,
}
