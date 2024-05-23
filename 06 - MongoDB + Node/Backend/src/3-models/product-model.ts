import { Document, Schema, model } from "mongoose";

export interface IProductModel extends Document {
    name: string;
    price: number;
    stock: number;
    categoryId: Schema.Types.ObjectId;
}

const ProductSchema = new Schema<IProductModel>({
    name: { 
        type: String,
        required: [true, "Missing name."],
        minlength: [2, "Name too short."],
        maxlength: [100, "Name too long."],
        trim: true,
        unique: true
    },
    price: {
        type: Number,
        required: [true, "Missing price."],
        min: [0, "Price can't be negative."],
        max: [1000, "Price can't exceed 1000."]
    },
    stock: {
        type: Number,
        required: [true, "Missing stock."],
        min: [0, "Stock can't be negative."],
        max: [1000, "Stock can't exceed 1000."]
    },
    categoryId: {
        type: Schema.Types.ObjectId
    }
}, { versionKey: false });

export const ProductModel = model<IProductModel>("ProductModel", ProductSchema, "products");
