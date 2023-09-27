import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";

function PoliticsPage({ swal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [privacyPolitics, setPrivacyPolitics] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");

  useEffect(() => {
    setIsLoading(true)
    fetchAll().then(() => {
      setIsLoading(false);
    });
  }, []);

  async function fetchAll() {
    await axios.get("/api/settings?name=privacyPolitics").then((res) => {
      setPrivacyPolitics(res.data?.value);
    });
    await axios.get("/api/settings?name=termsAndConditions").then((res) => {
      setTermsAndConditions(res.data?.value);
    });
  }

  async function saveAllPolitics() {
    await axios.put("/api/settings", {
      name: "privacyPolitics",
      value: privacyPolitics,
    });
    await axios.put("/api/settings", {
      name: "termsAndConditions",
      value: termsAndConditions,
    });
    setIsLoading(false);

    await swal.fire({
      title: "Configurações Salvas",
      icon: "success",
    });
  }

  return (
    <Layout>
      <h1>Políticas e Termos</h1>
      {isLoading && <Spinner fullWidth={1} />}
      {!isLoading && (
        <>
          <label>Política de Privacidade</label>
          <textarea
            value={privacyPolitics}
            onChange={(e) => setPrivacyPolitics(e.target.value)}
            rows={25}
          />
          <label>Termos e Condições</label>
          <textarea
            value={termsAndConditions}
            onChange={(e) => setTermsAndConditions(e.target.value)}
            rows={25}
          />
          <div>
            <button onClick={saveAllPolitics} className="btn-primary">
              Salvar Configurações
            </button>
          </div>
        </>
      )}
    </Layout>
  );
}

export default withSwal(({ swal }) => <PoliticsPage swal={swal} />);
