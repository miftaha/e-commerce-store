import { addToCart } from '@/features/cart/cartSlice'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

const ProductDetailedPage = () => {
  const router = useRouter()
  const { id } = router.query
  const dispatch = useDispatch()
  const [product, setProduct] = useState([])
  useEffect(() => {
    if (id) {
      axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err))
    }
  }, [id])

  if (!product)
    return <p className="text-center text-3xl font-semibold">Loading...</p>
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          <button
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductDetailedPage
