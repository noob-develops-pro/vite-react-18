import { createSlice } from '@reduxjs/toolkit'
import data from '../../components/cartItems'

const initialState = {
  cartItems: data,
  amount: 5,
  total: 0,
  isLoading: true,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    // incOrDec: (state, { payload }) => {
    //   const type = payload.type
    //   if (type === 'increase') {
    //     console.log('increased')
    //     state.amount = state.amount + 1
    //   }
    //   if (type === 'decrease') {
    //     console.log('decreased', state.amount)
    //     state.amount = state.amount - 1
    //   }
    // },

    increase: (state, { payload }) => {
      const itemId = payload.id
      const cardItem = state.cartItems.find((item) => item.id === itemId)
      cardItem.amount += 1
    },
    decrease: (state, { payload }) => {
      const itemId = payload.id
      const cardItem = state.cartItems.find((item) => item.id === itemId)
      cardItem.amount -= 1
    },

    clearCart: (state) => {
      state.cartItems = []
      state.amount = 0
    },

    removeItem: (state, action) => {
      console.log('remove', action)
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      state.amount -= 1
    },
    calculateTotal: (state, { payload }) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },
})

// console.log(cartSlice)

export const { increase, removeItem, clearCart, decrease, calculateTotal } =
  cartSlice.actions
export default cartSlice.reducer
