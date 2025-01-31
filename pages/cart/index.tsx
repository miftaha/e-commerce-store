import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@/store/store'
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '@/features/cart/cartSlice'
import Link from 'next/link'

export default function Cart() {
  const { items, total } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {items.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link href="/" className="text-blue-500">
            Shop now
          </Link>
        </p>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-contain"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => dispatch(decrementQuantity(item.id))}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(incrementQuantity(item.id))}
                    className="bg-gray-300 px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-semibold text-xl">
            Total: ${total.toFixed(2)}
          </div>
          <button className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  )
}
