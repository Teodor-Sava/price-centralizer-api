import mongoose, { Document, Model, Schema, model } from "mongoose";

export interface IEcommerceShop extends Document {
    name: string;
    description: string;
    image_url_link: string;
    search_page_link: string;
    search_base_api_link: string;
    search_api_query_params: ISearchApiQueryParams[];
}

export interface ISearchApiQueryParams extends IKeyValuePair {
    dataType: string;
}

export interface IKeyValuePair {
    [key: string]: string | string[];
}

const EcommerceShopSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    image_url_link: {
        type: String,
        default: 'http://image'
    },
    search_page_link: {
        type: String
    },
    search_base_api_link: {
        type: String
    },
    search_api_query_params: { strict: false }
});

export const EcommerceShop: Model<IEcommerceShop> = model<IEcommerceShop>("EcommerceShop", EcommerceShopSchema);