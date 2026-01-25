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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>
      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order, idx) => (
          <div key={idx} className="border p-4 mb-4 rounded-lg shadow-sm">
            <h2 className="font-semibold">{order.username}</h2>
            <p>Total: ${order.totalPrice.toFixed(2)}</p>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            <ul className="mt-2">
              {order.items.map(item => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.title} x {item.quantity}</span>
                  <span>${item.totalPrice.toFixed(2)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}
