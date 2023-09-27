import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductsForm";

export default function NewProduct() {
    return(
        <Layout>
            <h1 className="text-blue-900 font-semibold text-xl">New Product</h1>
            <ProductForm />
        </Layout>
    )
}
