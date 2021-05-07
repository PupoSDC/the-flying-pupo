export interface Aircraft {
    model: {
        code: string;
        text: string;
    };
    identification: {
        modes?: string;
        registration?: string;
        serialNo?: string;
    };
}
