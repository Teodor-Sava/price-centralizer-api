import mongoose, { Document, Model, model, Schema } from "mongoose";

export interface IProduct extends Document {
    name: string;
    prices: IPrice[];
    bestPrice: IPrice[];
    description: string;
}

export interface IPrice extends Document {
    date: Date;
    price: number;
    shop: {
        p_link_at_shop: string;
    }
}

const ProductSchema: Schema = new Schema({
    name: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
    currentPrice: {
        date: {
            type: Date
        },
        price: {
            type: Number,
            default: 0
        },
        shop: {
            type: String,
        }
    },
    previousPrices: [{
        date: {
            type: Date
        },
        price: {
            type: Number,
            default: 0
        }
    }]

});

export const Product: Model<IProduct> = model<IProduct>("Product", ProductSchema);
