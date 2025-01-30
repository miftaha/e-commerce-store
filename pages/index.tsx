import { fetchProducts } from '@/lib/api'
import { useEffect, useState } from 'react'
const Home = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetchProducts().then(setProducts)
  }, [])
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product: any) => (
        <div key={product.id} className="border p-4 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h2 className="font-bold text-lg">{product.title}</h2>
          <p className="text-gray-500">${product.price}</p>
        </div>
      ))}
    </div>
  )
}
export default Home
