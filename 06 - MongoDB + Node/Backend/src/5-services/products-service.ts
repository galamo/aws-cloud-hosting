import { ValidationError } from "../3-models/error-models";
import { IProductModel, ProductModel } from "../3-models/product-model";

function getAllProducts(): Promise<IProductModel[]> {
    return ProductModel.find().exec();
}

function addProduct(product: IProductModel): Promise<IProductModel> {
    const errors = product.validateSync();
    if (errors) throw new ValidationError(errors.message);
    return product.save();
}

export default {
    getAllProducts,
    addProduct
};
