import axios from "axios";
import ProductModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";

class ProductService {
    
	public async getAllProducts(): Promise<ProductModel[]> {
        const response = await axios.get<ProductModel[]>(appConfig.productsUrl);
        const dbProducts = response.data;
        return dbProducts;
    }

	public async addProduct(product: ProductModel): Promise<void> {
        const response = await axios.post<ProductModel>(appConfig.productsNewUrl, product);
        const dbProduct = response.data;
        console.log(dbProduct);
    }

}

export const productService = new ProductService();
