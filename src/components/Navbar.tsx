import { useState } from 'react'
import { useCartSelector } from '../store/hooks'
import Cart from './Cart'

function Navbar() {
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  
  // محاسبه تعداد کل آیتم‌های سبد خرید
  const cartQuantity = useCartSelector((state) =>
    state.cart.items.reduce((value, item) => value + item.qunatity, 0)
  )
  
  // تعداد آیتم‌های قبلی را برای نمایش اعلان استفاده می‌کنیم
  const previousQuantity = useCartSelector((state) => {
    const currentQuantity = state.cart.items.reduce((value, item) => value + item.qunatity, 0);
    return currentQuantity > 0 ? currentQuantity : 0;
  })

  // نمایش اعلان هنگامی که تعداد آیتم‌ها تغییر کند
  if (cartQuantity > previousQuantity && previousQuantity > 0) {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }

  function handleOpenCart() {
    setCartIsOpen(true)
  }

  function handleCloseCart() {
    setCartIsOpen(false)
  }

  return (
    <>
      {cartIsOpen && <Cart onClose={handleCloseCart} />}
      {showNotification && (
        <div className="cart-notification">محصول به سبد خرید اضافه شد!</div>
      )}
      <div className='navbar'>
        <div className="logo">
          <span className="logo-text">فروشگاه هدفون</span>
        </div>
        <button onClick={handleOpenCart} className="cart-button">
          <span>سبد خرید</span>
          {cartQuantity > 0 && <span className="cart-badge">{cartQuantity}</span>}
        </button>
      </div>
    </>
  )
}

export default Navbar
