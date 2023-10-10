import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { Upload } from "../node_modules/lucide-react/dist/cjs/lucide-react";
import { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { withSwal } from "react-sweetalert2";

function SettingsPage({ swal, images: existingImages }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [featuredProductId, setFeaturedProductId] = useState("");
  const [shippingFee, setShippingFee] = useState("");
  const [numberPhone, setNumberPhone] = useState('');
  const [instagram, setInstagram] = useState('');
  const [images, setImages] = useState(existingImages || []);
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    fetchAll().then(() => {
      setIsLoading(false);
    });
  }, []);

  async function fetchAll() {
    await axios.get("/api/products").then((res) => {
      setProducts(res.data);
    });
    await axios.get("/api/settings?name=featuredProductId").then((res) => {
      setFeaturedProductId(res.data?.value);
    });
    await axios.get("/api/settings?name=shippingFee").then((res) => {
      setShippingFee(res.data?.value);
    });
    await axios.get('api/settings?name=numberPhone').then((res) => {
      setNumberPhone(res.data?.value);
    })
    await axios.get('/api/settings?name=instagram').then((res) => {
      setInstagram(res.data?.value);
    })
  }

  async function saveSettings() {
    setIsLoading(true);
    await axios.put("/api/settings", {
      name: "featuredProductId",
      value: featuredProductId,
    });
    await axios.put("/api/settings", {
      name: "shippingFee",
      value: shippingFee,
    });
    await axios.put('/api/settings', {
      name: 'numberPhone',
      value: numberPhone,
    })
    await axios.put('/api/settings', {
      name: 'instagram',
      value: instagram
    })
    setIsLoading(false);

    swal.fire({
      title: "Configurações Salvas",
      icon: "success",
    });
  }

  return (
    <Layout>
      <h1>Configurações da Loja</h1>
      {isLoading && <Spinner fullWidth={1} />}
      {!isLoading && (
        <>
          <label>Produto Destaque</label>
          <select
            value={featuredProductId}
            onChange={(e) => setFeaturedProductId(e.target.value)}
          >
            {products.length > 0 &&
              products.map((p) => (
                <option key={p._id} value={p._id}>
                  {p.title}
                </option>
              ))}
          </select>
          <label>Frete (R$)</label>
          <input
            type="number"
            value={shippingFee}
            onChange={(e) => setShippingFee(e.target.value)}
          />
          <label>Número de Contato</label>
          
          <input
            type="text"
            placeholder="+55 (61) 99999-8888"
            value={numberPhone}
            onChange={(e) => setNumberPhone(e.target.value)}
          />
          <label>Instagram (link)</label>
          <input
            type="text"
            placeholder="https://www.instagram.com/seu_user/"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
          <div>
            <button onClick={saveSettings} className="btn-primary">
              Salvar
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <SettingsPage swal={swal} />);
