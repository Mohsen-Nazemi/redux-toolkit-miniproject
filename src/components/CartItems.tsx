import { useCartSelector, useCartDispatch } from '../store/hooks'
import { type CartItem, addToCart, removeFromCart } from '../store/cart-slice'

function CartItems() {
  const cartItems = useCartSelector((state) => state.cart.items)
  const dispatch = useCartDispatch()

  const totalPrice = cartItems.reduce(
    (value, item) => value + item.price * item.qunatity,
    0
  )

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item))
  }

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id))
  }

  return (
    <div className="cart-content">
      {cartItems.length === 0 && (
        <div className="cart-empty">
          <p>محصولی در سبد خرید وجود ندارد.</p>
          <span className="empty-cart-icon">🛒</span>
        </div>
      )}
      
      <ul className='cart-items'>
        {cartItems.map((item) => {
          const itemTotal = item.price * item.qunatity;
          
          return (
            <li key={item.id}>
              <div className="cart-item-info">
                <span className="cart-item-title">{item.title}</span>
                <span className="cart-item-price">{item.price.toLocaleString()} تومان</span>
              </div>
              <div className='cart-item-actions'>
                <button 
                  onClick={() => handleRemoveFromCart(item.id)}
                  aria-label="کاهش تعداد"
                >
                  -
                </button>
                <span>{item.qunatity}</span>
                <button 
                  onClick={() => handleAddToCart(item)}
                  aria-label="افزایش تعداد"
                >
                  +
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      {cartItems.length > 0 && (
        <p className='cart-total-price'>
          مجموع: <strong>{totalPrice.toLocaleString()}</strong> تومان
        </p>
      )}
    </div>
  )
}

export default CartItems
