import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { subHours } from "date-fns";

export default function HomeStats() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchOrders();
  }, []);

  async function fetchOrders() {
    await axios.get('/api/orders').then((res) => {
      setOrders(res.data);
      setIsLoading(false);
    })
  }

  function ordersTotal(orders) {
    let sum = 0;
    orders.forEach(order => {
        const {line_items} = order;
        line_items.forEach(li => {
            const lineSum = li.quantity * li.price_data.unit_amount / 100;
            sum += lineSum;
        })
    })
    return new Intl.NumberFormat('pt-BR').format(sum);
  }

  if (isLoading) {
    return (
      <div className="my-4">
        <Spinner fullWidth={true} />
      </div>
    );
  }

  const ordersToday = orders.filter(o =>  new Date(o.createdAt) > subHours(new Date, 24))
  const ordersWeek = orders.filter(o =>  new Date(o.createdAt) > subHours(new Date, 24*7))
  const ordersMonth = orders.filter(o =>  new Date(o.createdAt) > subHours(new Date, 24*30))

  return (
    <div>
      <h2 className="text-center">Vendas</h2>
      <div className="tilesGrid">
        <div className="tile">
          <h3 className="tileHeader">Hoje</h3>
          <div className="tileNumber">{ordersToday.length}</div>
          <div className="tileDesc">{ordersToday.length} Vendas hoje</div>
        </div>
        <div className="tile">
          <h3 className="tileHeader">Essa Semana</h3>
          <div className="tileNumber">{ordersWeek.length}</div>
          <div className="tileDesc">{ordersWeek.length} Vendas essa semana</div>
        </div>
        <div className="tile">
          <h3 className="tileHeader">Esse Mês</h3>
          <div className="tileNumber">{ordersMonth.length}</div>
          <div className="tileDesc">{ordersMonth.length} Vendas esse mês</div>
        </div>
      </div>
      <h2 className="text-center">Receita</h2>
      <div className="tilesGrid">
        <div className="tile">
          <h3 className="tileHeader">Hoje</h3>
          <div className="tileNumber">R$ {ordersTotal(ordersToday)}</div>
          <div className="tileDesc">{ordersToday.length} Vendas hoje</div>
        </div>
        <div className="tile">
          <h3 className="tileHeader">Essa Semana</h3>
          <div className="tileNumber">R$ {ordersTotal(ordersWeek)}</div>
          <div className="tileDesc">{ordersWeek.length} Vendas essa semana</div>
        </div>
        <div className="tile">
          <h3 className="tileHeader">Esse Mês</h3>
          <div className="tileNumber">R$ {ordersTotal(ordersMonth)}</div>
          <div className="tileDesc">{ordersMonth.length} Vendas esse mês</div>
        </div>
      </div>
    </div>
  );
}
