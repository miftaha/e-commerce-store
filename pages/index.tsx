import { fetchProducts } from '@/lib/api'
import Link from 'next/link'
import { useEffect, useState } from 'react'
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product: any) => (
        <Link
          href={`/product/${product.id}`}
          key={product.id}
          className="border cursor-pointer rounded-lg p-4 hover:shadow-lg"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md"
          />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
        </Link>
      ))}
    </div>
  )
}
export default Home
