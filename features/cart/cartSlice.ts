import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

interface CartItem {
  id: number
  title: string
  price: number
  quantity: number
  image: string
}

interface CartState {
  items: CartItem[]
  total: number
}

const initialState: CartState = { items: [], total: 0 }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      state.total += item?.price
    },

    incrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity += 1
        state.total += item.price
      }
    },

    decrementQuantity: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
      state.total -= item?.price
    },

    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
        state.total = state.total - item.price * item.quantity
      }
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions
export default cartSlice.reducer
