import Layout from "@/components/Layout";
import Spinner from "@/components/Spinner";
import axios from "axios";
import { useEffect, useState } from "react";

export default function OrdersPage() {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetchOrders();
    }, [])

    async function fetchOrders() {
        await axios.get('/api/orders').then((response) => {
            setOrders(response.data)
            setIsLoading(false)
        })
    }

    return(
        <Layout>
            <h1>Compras</h1>
            <table className="basic">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Pago</th>
                        <th>Informações do Cliente</th>
                        <th>Produtos</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading && (
                        <tr>
                            <td colSpan={4}>
                                <div className="py-4">
                                    <Spinner fullWidth={true} />
                                </div>
                            </td>
                        </tr>
                    )}
                    {orders.length > 0 && orders.map(order=> (
                        <tr key={order._id}>
                            <td>
                                {(new Date(order.createdAt)).toLocaleString()}
                            </td>
                            <td className={order.paid ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>{order.paid ? 'Sim' : 'Não'}</td>
                            <td>
                                {order.name} {order.email} <br />
                                {order.city} {order.postalCode} {order.country} <br />
                                {order.streetAddress}
                                
                            </td>
                            <td>
                                {order.line_items.map(l => (
                                    <>
                                        {l.price_data?.product_data.name} X {l.quantity} <br />
                                    </>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}