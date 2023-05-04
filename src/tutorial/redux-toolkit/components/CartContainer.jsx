import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { clearCart } from '../features/cart/CartSlice'

const CartContainer = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((store) => store.cart)
  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your Bag</h2>
          <h4 className='empty-cart'>your bag is currently Empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>your Bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(clearCart())
          }}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}
export default CartContainer
