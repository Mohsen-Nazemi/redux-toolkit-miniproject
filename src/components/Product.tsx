import { useState } from 'react'
import { useCartDispatch } from '../store/hooks'
import { addToCart } from '../store/cart-slice'

type ProductProps = {
  id: string
  title: string
  price: number
  image: string
}

function Product({ id, title, price, image }: ProductProps) {
  const dispatch = useCartDispatch()
  const [isAdding, setIsAdding] = useState(false)

  function handleAddToCart() {
    dispatch(addToCart({ id, title, price }))
    setIsAdding(true)
    

    setTimeout(() => {
      setIsAdding(false)
    }, 1000)
  }

  return (
    <div className='product'>
      <img src={image} alt={title} />
      <div className='product-content'>
        <h3>{title}</h3>
        <p className='product-price'>{price.toLocaleString()} تومان</p>
      </div>
      <p className='product-actions'>
        <button 
          onClick={handleAddToCart} 
          className={isAdding ? 'adding' : ''}
          disabled={isAdding}
        >
          {isAdding ? 'اضافه شد!' : 'افزودن به سبد خرید'}
        </button>
      </p>
    </div>
  )
}

export default Product
