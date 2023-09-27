import axios from "axios";
import { Upload } from "../node_modules/lucide-react/dist/cjs/lucide-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { ReactSortable } from "react-sortablejs";

export default function ProductForm({
  _id,
  title: existingTitle,
  description: existingDescription,
  price: existingPrice,
  images: existingImages,
  category: assignedCategory,
  properties:assignedProperties,
}) {
  const [title, setTitle] = useState(existingTitle || "");
  const [description, setDescription] = useState(existingDescription || "");
  const [category, setCategory] = useState(assignedCategory || "");
  const [productProperties, setProductProperties] = useState(assignedProperties || {});
  const [price, setPrice] = useState(existingPrice || "");
  const [images, setImages] = useState(existingImages || []);
  const [goToProducts, setGoToProducts] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false)
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    setCategoriesLoading(true)
    fetchCategories();
  }, []);

  async function fetchCategories() {
    await axios.get('/api/categories').then((result) => {
      setCategories(result.data);
      setCategoriesLoading(false)
    })
  }

  async function saveProduct(e) {
    e.preventDefault();
    const data = { title, description, price, images, category, properties:productProperties };
    if (_id) {
      await axios.put("/api/products", { ...data, _id });
    } else {
      await axios.post("/api/products", data);
    }
    setGoToProducts(true);
  }

  if (goToProducts) {
    router.push("/products");
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

  function setProductProp(propName, value) {
    setProductProperties(prev => {
      const newProductProps = {...prev}
      newProductProps[propName] = value
      return newProductProps
    })
  }

  const propertiesToFill = [];
  if (categories.length > 0 && category) {
    let catInfo = categories.find(({ _id }) => _id === category);
    propertiesToFill.push(...catInfo.properties);
    while (catInfo?.parent?.id) {
      const parentCat = categories.find(
        ({ _id }) => _id === catInfo?.parent?._id
      );
      propertiesToFill.push(...parentCat.properties);
      catInfo = parentCat;
    }
  }

  return (
    <form onSubmit={saveProduct}>
      <label>Nome do Produto</label>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Categoria</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Sem categoria</option>
        {categories.length > 0 &&
          categories.map((c) => (
            <option key={c._id} value={c._id}>
              {c.name}
            </option>
          ))}
      </select>
      {categoriesLoading && (
        <Spinner />
      )}
      {propertiesToFill.length > 0 &&
        propertiesToFill.map((p) => (
          <div key={p._id} className="">
            <label>{p.name[0].toUpperCase()+p.name.substring(1)}</label>
            <div>
            <select value={productProperties[p.name]} onChange={e => setProductProp(p.name, e.target.value)}>
              {p.values.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
            </div>
          </div>
        ))}
      <label>Imagens </label>
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
      <label>Descrição</label>
      <textarea
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <label>Preço do Produto</label>
      <input
        type="text"
        placeholder="Preço"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button typeof="submit" className="btn-primary">
        Salvar
      </button>
    </form>
  );
}
