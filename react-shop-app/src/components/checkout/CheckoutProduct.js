import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, changeQnt } from '../../store/actions/products'

export const CheckoutProduct = ({ product }) => {

  const dispatch = useDispatch()
  return (
    <tr>
      <th scope="row">
        <img src={product.product.image} alt="" className="img-fluid z-depth-0" />
      </th>
      <td className="my-td pr-5">
        <h5 className="mt-3">
          <strong>{product.product.name}</strong>
        </h5>
        <p className="text-muted">Apple</p>
      </td>
      <td className="my-td text-center px-5">{product.product.price.toLocaleString('en-EN')} SEK</td>
      <td className="my-td text-center">
        <div className="d-flex align-items-center justify-content-center pl-3">
          <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
            <button type="button" className="btn btn-blue px-3" onClick={() => { dispatch(changeQnt(product._id, false)) }}>-</button>
            <button type="button" className="btn btn-blue px-3" onClick={() => { dispatch(changeQnt(product._id, true)) }}>+</button>
          </div>
          <strong>{product.quantity}</strong>
        </div>
      </td>
      <td className="font-weight-bold my-td text-center">
        <strong>{(product.product.price * product.quantity).toLocaleString('en-EN')} SEK</strong>
      </td>
      <td className="my-td">
        <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button className="btn btn-danger px-3" onClick={() => dispatch(removeFromCart(product._id))}>
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  )
}
