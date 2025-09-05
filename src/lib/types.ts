export type OptionalSelection = string | null;

export type Security = {
    id: string,
    name: string,
    exchange: string;
    symbol: string;
    currency: string;
    timestamp: string;
    quote: number;
    gamma: number;
}
