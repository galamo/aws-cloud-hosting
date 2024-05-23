import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm<ProductModel>();

    async function submit(product: ProductModel) {
        try {
            await productService.addProduct(product);
            alert("Product has been added.");            navigate("/products");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="AddProduct Box">

            <form onSubmit={handleSubmit(submit)}>

                <label>Name:</label>
                <input type="text" autoFocus {...register("name")} required />

                <label>Price:</label>
                <input type="number" step="0.01" {...register("price")} required min="0" max="1000" />

                <label>Stock:</label>
                <input type="number" {...register("stock")} required min="0" max="1000" />

                <button>Add</button>

            </form>
        </div>
    );
}

export default AddProduct;