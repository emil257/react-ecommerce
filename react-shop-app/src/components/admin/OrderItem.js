import React from 'react'

export const OrderItem = ({ item }) => {
  return (
    <tr>
      <th scope="row">
        <img src={item.product.image} alt="" className="img-fluid z-depth-0 my-image" />
      </th>
      <td className="my-td-1 pr-3">
        <h5 className="mt-3">
          <strong>{item.product.name}</strong>
        </h5>
        <p className="text-muted">Apple</p>
      </td>
      <td className="my-td-1 text-center px-3">{item.product.price.toLocaleString('en-EN')} SEK</td>
      <td className="my-td-1 text-center">
        <div className="d-flex align-items-center justify-content-center">
          <strong>{item.quantity}</strong>
        </div>
      </td>
      <td className="font-weight-bold my-td-1 text-center">
        <strong>{(item.product.price * item.quantity).toLocaleString('en-EN')} SEK</strong>
      </td>
    </tr>
  )
}
