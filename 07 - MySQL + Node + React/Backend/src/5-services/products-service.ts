import { OkPacketParams } from "mysql2";
import dal from "../2-utils/dal";
import { ValidationError } from "../3-models/error-models";
import ProductModel from "../3-models/product-model";

async function getAllProducts(): Promise<ProductModel[]> {
    const sql = "SELECT ProductID AS id, ProductName AS name, UnitPrice AS price, UnitsInStock AS stock FROM products";
    const products = await dal.execute(sql);
    return products;
}

async function addProduct(product: ProductModel): Promise<ProductModel> {
    const error = product.validate();
    if(error) throw new ValidationError(error);
    const sql = "INSERT INTO products(ProductName, UnitPrice, UnitsInStock) VALUES(?, ?, ?)";
    const info: OkPacketParams = await dal.execute(sql, [product.name, product.price, product.stock]);
    product.id = info.insertId;
    return product;
}

export default {
    getAllProducts,
    addProduct
};

