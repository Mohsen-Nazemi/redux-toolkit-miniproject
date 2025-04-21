import { createPortal } from 'react-dom'
import { useEffect, useRef } from 'react'
import CartItems from './CartItems.tsx'

type CartProps = {
  onClose: () => void
}

function Cart({ onClose }: CartProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  // اضافه کردن امکان بستن با کلیک روی پس‌زمینه و دکمه Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    
    // انیمیشن ورودی
    const timer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.classList.add('visible');
      }
    }, 10);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      clearTimeout(timer);
    };
  }, [onClose]);

  return createPortal(
    <>
      <div className='cart-backdrop' onClick={onClose} />
      <dialog className='cart-modal' ref={modalRef} open>
        <div className="cart-header">
          <h2>سبد خرید</h2>
          <button 
            className="close-button"
            onClick={onClose}
            aria-label="بستن"
          >
            &times;
          </button>
        </div>
        <CartItems />
        <div className='cart-actions'>
          <button 
            onClick={onClose}
            className="cancel-button"
          >
            بستن
          </button>
          {/* اضافه کردن دکمه پرداخت در صورتی که سبد خرید خالی نباشد */}
          <button 
            className="checkout-button"
            onClick={() => alert('سیستم پرداخت فعال نیست')}
          >
            پرداخت
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById('modal')!
  )
}

export default Cart
