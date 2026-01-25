import { useEffect, useState } from "react"

interface OrderItem {
  id: number
  title: string
  price: number
  quantity: number
  totalPrice: number
}

interface Order {
  username: string
  items: OrderItem[]
  totalPrice: number
  createdAt: string
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true)
      try {
        const res = await fetch("http://localhost:8080/orders")
        const data = await res.json()
        setOrders(data)
      } catch (err) {
        console.error("Failed to fetch orders:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()
  }, [])

  if (loading) return <p>Loading orders...</p>

  return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">All Orders</h1>

            {orders.length === 0 ? (
                <p className="text-center text-gray-500 text-lg">No orders yet</p>
            ) : (
                <div className="grid gap-6">
                {orders.map((order) => (
                    <div
                    key={order.createdAt}
                    className="bg-white rounded-xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">{order.username}</h2>
                        <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
                    </div>

                    <p className="mb-2 text-gray-700 font-medium">
                        Total: <span className="text-green-600">${order.totalPrice.toFixed(2)}</span>
                    </p>

                    <ul className="mt-3 space-y-2">
                        {order.items.map((item) => (
                        <li
                            key={item.id}
                            className="flex justify-between items-center bg-gray-50 rounded-lg p-3 border border-gray-100 shadow-sm"
                        >
                            <span className="font-medium text-gray-800">{item.title} x {item.quantity}</span>
                            <span className="font-semibold text-gray-900">${item.totalPrice.toFixed(2)}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                ))}
                </div>
            )}
        </div>


  )
}
