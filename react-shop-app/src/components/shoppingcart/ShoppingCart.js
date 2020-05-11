import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Link } from 'react-router-dom'
import { ShoppingCartProduct } from './ShoppingCartProduct'

import { cartTotal } from '../../store/actions/products'

export const ShoppingCart = () => {

  const cart = useSelector(state => state.products.cart)
  const totalCartValue = useSelector(state => state.products.cartTotal)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartTotal())
  }, [cart, dispatch])

  if (cart.length === 0) {
    return (
      <div>
        <div className="cart-item">
          <div className="p-2 d-flex justify-content-center align-items-center">
            <div className="d-flex align-items-center">Din kundvagn är tom.</div>
          </div>
          <div className="dropdown-divider"></div>
        </div>
        <div className="ml-1 p-2 d-flex justify-content-between align-items-center">
          <div>
            <div className="total-price">
              Totalt:
          <span className="ml-1">0 SEK</span>
            </div>
            <small className="text-muted">inkl. moms</small>
          </div>
          <Link className="p-0" to="/checkout"><button className="btn btn-info closeNav">Gå till kassan</button></Link>
        </div>
      </div>
    )
  }
  return (
    <div>
      {
        cart.map(product => {
          return (
            <ShoppingCartProduct key={product._id} product={product} />
          )
        })
      }
      <div className="ml-1 p-2 d-flex justify-content-between align-items-center">
        <div>
          <div className="total-price">
            Totalt:
          <span className="ml-1">{totalCartValue.toLocaleString('en-EN')} SEK</span>
          </div>
          <small className="text-muted">inkl. moms</small>
        </div>
        <Link className="p-0" to="/checkout"><button className="btn btn-info closeNav">Gå till kassan</button></Link>
      </div>
    </div>
  )
}
