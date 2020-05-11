import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, changeQnt } from '../../store/actions/products'

export const ShoppingCartProduct = ({ product }) => {

  const dispatch = useDispatch()

  return (
    <div className="cart-item">
      <div className="p-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img src={product.product.image} alt="" className="img-fluid img-width" />
          <div>
            <div>
              <strong>{product.product.name}</strong>
            </div>
            <div>
              <small>{product.quantity} X {product.product.price.toLocaleString('en-EN')} SEK</small>
            </div>
          </div>
        </div>
        <div>
          <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
            <button type="button" className="btn btn-blue px-3" onClick={() => { dispatch(changeQnt(product._id, false)) }}>-</button>
            <button type="button" className="btn btn-blue px-3" onClick={() => { dispatch(changeQnt(product._id, true)) }}>+</button>
          </div>
          <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
            <button className="btn btn-danger px-3" onClick={() => dispatch(removeFromCart(product._id))}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="dropdown-divider"></div>
    </div>
  )
}
