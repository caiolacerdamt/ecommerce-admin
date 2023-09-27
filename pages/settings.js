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
    await axios.get('/api/settings?name=images').then((res) => {
      setImages(res.data?.value)
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
    await axios.put('/api/settings',{
      name: 'images',
      value: images,
    })
    setIsLoading(false);

    swal.fire({
      title: "Configurações Salvas",
      icon: "success",
    });
  }

  async function uploadImages(e) {
    const files = e.target?.files;
    if (files?.length > 0) {
      setIsUploading(true);
      const data = new FormData();

      for (const file of files) {
        data.append("file", file);
      }

      const res = await axios.post("/api/upload", data);

      setImages((oldImages) => {
        return [...oldImages, ...res.data.links];
      });
      setIsUploading(false);
    }
  }

  function updateImagesOrder(images) {
    setImages(images);
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


          <label>Banner da Loja</label>
          <div className="mb-2 flex flex-wrap gap-1">
        <ReactSortable
          className="flex flex-wrap gap-1"
          list={images}
          setList={updateImagesOrder}
        >
          {!!images?.length &&
            images.map((link) => (
              <div key={link} className="h-24 bg-white p-4 shadow-sm rounded-sm border border-gray-200">
                <img src={link} alt="" className="rounded-lg" />
              </div>
            ))}
        </ReactSortable>
        {isUploading && (
          <div className="h-24 p-1 flex items-center">
            <Spinner />
          </div>
        )}
        <label className="bg-white shadow-sm border border-gray-200 cursor-pointer w-24 h-24 text-center flex items-center justify-center flex-col text-primary rounded-sm">
          <Upload />
          <div className="text-sm">Adicionar</div>
          <input type="file" onChange={uploadImages} className="hidden" />
        </label>
      </div>




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
