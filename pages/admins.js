import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import { prettyDate } from "@/lib/date";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";
import Swal from "sweetalert2";

function AdminsPage({ swal }) {
  const [email, setEmail] = useState("");
  const [adminEmails, setAdminEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function addAdmin(e) {
    e.preventDefault();
    await axios.post("/api/admins", { email }).then((res) => {
      console.log(res.data);
      swal.fire({
        title: "Administrador Criado",
        icon: "success",
      });
      setEmail("");
      loadAdmins();
    }).catch(err => {
        swal.fire({
            title: "Erro",
            text: err.response.data.message,
            icon: "error",
          });
    });
  }

  async function deleteAdmin(_id, email) {
    Swal.fire({
      title: "Tem certeza?",
      text: `Você deseja excluir ${email}?`,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sim,",
      confirmButtonColor: "#d55",
      reverseButtons: true,
    }).then(async result => {
      if (result.isConfirmed) {
        await axios.delete("/api/admins?_id=" + _id).then(() => {
          swal.fire({
            title: "Administrador Excluído",
            icon: "success",
          });
          loadAdmins();
        });
      }
    });
  }

  async function loadAdmins() {
    setIsLoading(true);
    await axios.get("/api/admins").then((res) => {
      setAdminEmails(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    loadAdmins();
  }, []);

  return (
    <Layout>
      <h1>Administradores</h1>
      <h2>Adicionar novo administrador</h2>
      <form onSubmit={addAdmin}>
        <div className="flex gap-2">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-0"
            placeholder="Email"
          />
          <button type="submit" className="btn-primary py-1 whitespace-nowrap">
            Adicionar
          </button>
        </div>
      </form>
      <h2>Administradores</h2>
      <table className="basic">
        <thead>
          <tr>
            <th className="text-left">Emails</th>
            <th></th>
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
          {adminEmails.length > 0 &&
            adminEmails.map((adminEmail) => (
              <tr key={adminEmail._id}>
                <td>{adminEmail.email}</td>
                <td>
                  {adminEmail.createdAt && prettyDate(adminEmail.createdAt)}
                </td>
                <td>
                  <button
                    onClick={() =>
                      deleteAdmin(adminEmail._id, adminEmail.email)
                    }
                    className="btn-red"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default withSwal(({ swal }) => <AdminsPage swal={swal} />);
