import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DeleteProductPage() {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState('');
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }
    fetchProductId();
  }, [id]);

  async function fetchProductId() {
    axios.get('/api/products?id=' + id).then((response) => {
      setProductInfo(response.data)
    })
  }

  function goBack() {
    router.push("/products");
  }

  async function DeleteProduct() {
    await axios.delete('/api/products?id='+id)
    goBack();
  }

  return (
    <Layout>
      <h1 className="text-xl font-semibold text-blue-900 text-center">
        Você quer mesmo excluir <b>{productInfo.title}</b>?
      </h1>
      <div className="flex gap-2 justify-center">
        <button className="btn-red" onClick={DeleteProduct}>
            Excluir
        </button>
        <button className="btn-default" onClick={goBack}>
            Cancelar
        </button>
        </div>
    </Layout>
  );
}
