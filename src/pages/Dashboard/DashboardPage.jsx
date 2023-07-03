import { DashboardEmpty } from "./components/DashboardEmpty";
import { DashboardCard } from "./components/DashboardCard";
import { useTitle } from '../../hooks/useTitle';
import { useEffect, useState } from "react";
import { getUserOrders } from "../../services";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle('Dashboard');

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          closeOnClick: true,
        });
        console.log(error);
      }
    }

    fetchOrders();
  }, []);

  return (
    <main>
      <section>
        {/* Dashboard title */}
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          My Dashboard
        </p>
      </section>

      <section>
        {/* Displaying dashboard cards for each order */}
        {orders.length > 0 &&
          orders.map((order) => (
            <DashboardCard key={order.id} order={order} />
          ))}
      </section>

      <section>
        {/* Displaying the empty dashboard message if there are no orders */}
        {!orders.length && <DashboardEmpty />}
      </section>
    </main>
  );
};
