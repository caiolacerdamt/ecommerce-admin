import Layout from "@/components/Layout";
import axios from "axios";
import {
  Pencil,
  Trash,
} from "../node_modules/lucide-react/dist/cjs/lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  async function fetchProducts() {
    await axios.get('/api/products').then((response) => {
      setProducts(response.data);
      setIsLoading(false);
    })
  }

  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Adicionar novo produto
      </Link>
      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Nome do Produto</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={2}>
                <div className="py-4">
                  <Spinner fullWidth={true} />
                </div>
              </td>
            </tr>
          )}

          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <Link href={"/products/edit/" + product._id}>
                  <Pencil className="w-4 h-4" />
                </Link>
                <Link href={"/products/delete/" + product._id}>
                  <Trash className="w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
