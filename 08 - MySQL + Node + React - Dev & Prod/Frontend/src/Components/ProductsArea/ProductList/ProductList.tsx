import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import "./ProductList.css";

function ProductList(): JSX.Element {

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {
        productService.getAllProducts()
            .then(dbProducts => setProducts(dbProducts))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="ProductList">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p => <tr key={p.id}>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.stock}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
