// 'use client';

// import { useState, useEffect } from 'react';
// import orders from '../data/data.json';

// type PizzaOrder = {
//   id: string;
//   customer: string;
//   pizza: string;
//   quantity: number;
//   orderDate: string;
//   status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
// };

// function StatusBadge({ status }: { status: PizzaOrder['status'] }) {
//   const colorMap: Record<PizzaOrder['status'], string> = {
//     Pending: 'bg-yellow-200 text-yellow-800',
//     Preparing: 'bg-blue-200 text-blue-800',
//     'Out for Delivery': 'bg-purple-200 text-purple-800',
//     Delivered: 'bg-green-200 text-green-800',
//     Cancelled: 'bg-red-200 text-red-800',
//   };

//   return (
//     <span className={`px-2 py-1 rounded text-sm font-semibold ${colorMap[status]}`}>
//       {status}
//     </span>
//   );
// }

// export default function PizzaOrdersPage() {
//   const [search, setSearch] = useState('');
//   const [filteredOrders, setFilteredOrders] = useState<PizzaOrder[]>(orders as PizzaOrder[]);

//   useEffect(() => {
//     const lower = search.toLowerCase();
//     setFilteredOrders(
//       (orders as PizzaOrder[]).filter(
//         (o) => o.customer.toLowerCase().includes(lower) || o.pizza.toLowerCase().includes(lower)
//       )
//     );
//   }, [search]);

//   return (
//     <main className="min-h-screen bg-black text-white px-4 py-8">
//       <h1 className="text-4xl font-extrabold text-center text-red-500 mb-6">Pizza Orders 🍕</h1>

//       <div className="flex justify-center mb-8">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search your pizza..."
//           className="px-5 py-3 w-full max-w-md rounded-md bg-gray-900 text-white border border-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
//         />
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
//         {filteredOrders.map((order) => (
//           <div
//             key={order.id}
//             className="bg-red-900 rounded-lg p-4 shadow-md h-44 flex flex-col justify-between hover:scale-105 transition-transform duration-200"
//           >
//             <div>
//               <h2 className="text-xl font-semibold">{order.pizza}</h2>
//               <p className="text-sm text-gray-300">Customer: {order.customer}</p>
//               <p className="text-sm text-gray-300">Quantity: {order.quantity}</p>
//               <p className="text-xs text-gray-400">Date: {order.orderDate}</p>
//             </div>
//             <div className="mt-2">
//               <StatusBadge status={order.status} />
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredOrders.length === 0 && (
//         <p className="text-center text-gray-400 mt-8">No pizzas match your search. 🍕🔍</p>
//       )}
//     </main>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import orders from '../data/data.json';

type PizzaOrder = {
  id: string;
  customer: string;
  pizza: string;
  quantity: number;
  orderDate: string;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Delivered' | 'Cancelled';
};

function StatusBadge({ status }: { status: PizzaOrder['status'] }) {
  const colorMap: Record<PizzaOrder['status'], string> = {
    Pending: 'bg-yellow-200 text-yellow-800',
    Preparing: 'bg-blue-200 text-blue-800',
    'Out for Delivery': 'bg-purple-200 text-purple-800',
    Delivered: 'bg-green-200 text-green-800',
    Cancelled: 'bg-red-200 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded text-sm font-semibold ${colorMap[status]}`}>
      {status}
    </span>
  );
}

export default function PizzaOrdersPage() {
  const [search, setSearch] = useState('');
  const [filteredOrders, setFilteredOrders] = useState<PizzaOrder[]>(orders as PizzaOrder[]);

  useEffect(() => {
    const lower = search.toLowerCase();
    setFilteredOrders(
      (orders as PizzaOrder[]).filter(
        (o) => o.customer.toLowerCase().includes(lower) || o.pizza.toLowerCase().includes(lower)
      )
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-4xl font-extrabold text-center text-red-500 mb-6">Pizza Orders 🍕</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your pizza..."
          className="px-5 py-3 w-full max-w-md rounded-md bg-gray-900 text-white border border-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-red-500"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="relative rounded-lg p-4 shadow-md h-44 flex flex-col justify-between hover:scale-105 transition-transform duration-200 overflow-hidden"
            style={{
              backgroundImage: `url('/pizza.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.35)', // darken for text readability
            }}
          >
            <div className="relative z-10 text-white">
              <h2 className="text-xl font-semibold">{order.pizza}</h2>
              <p className="text-sm">Customer: {order.customer}</p>
              <p className="text-sm">Quantity: {order.quantity}</p>
              <p className="text-xs">Date: {order.orderDate}</p>
            </div>
            <div className="relative z-10 mt-2">
              <StatusBadge status={order.status} />
            </div>
            {/* Overlay to darken background for better text contrast */}
            <div className="absolute inset-0 bg-black opacity-40 pointer-events-none rounded-lg"></div>
          </div>
        ))}
      </div>

      {filteredOrders.length === 0 && (
        <p className="text-center text-gray-400 mt-8">No pizzas match your search. 🍕🔍</p>
      )}
    </main>
  );
}
