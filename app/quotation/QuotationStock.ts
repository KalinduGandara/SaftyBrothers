import { Stock } from "../stock/StockSchema";

export interface QuotationStock extends Stock {
    index: number;
    id: number;
    itemCode: string;
    itemName: string;
    quantity: number;
    unitPrice: number;
    discount: number;
    total: number;
}

