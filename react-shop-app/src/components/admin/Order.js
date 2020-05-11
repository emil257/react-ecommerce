import React from 'react'
import { OrderItem } from './OrderItem'
import { useDispatch } from 'react-redux'
import { changeOrderStatus } from '../../store/actions/order'

export const Order = ({ order }) => {
  const dispatch = useDispatch()
  return (
    <div className="container my-5 py-3 z-depth-1 rounded my-order">
      <section className="dark-grey-text">
        <div className="table-responsive">
          <table className="table product-table mb-0">
            <thead className="mdb-color lighten-5">
              <tr>
                <th></th>
                <th className="font-weight-bold pr-5">
                  <strong>Product</strong>
                </th>
                <th className="font-weight-bold text-center">
                  <strong>Price</strong>
                </th>
                <th className="font-weight-bold text-center">
                  <strong>QTY</strong>
                </th>
                <th className="font-weight-bold text-center">
                  <strong>Amount</strong>
                </th>
                <th className="font-weight-bold text-center">

                </th>
              </tr>
            </thead>
            <tbody>
              {
                order.order.map(orderItem => {
                  return (<OrderItem key={orderItem._id} item={orderItem} />)
                })
              }
              <tr>
                <td colSpan="2" className="align-bottom">
                  <h6>
                    <strong>Order ID: {order._id}</strong>
                  </h6>
                  <h6>
                    <strong>User ID: {order.userId}</strong>
                  </h6>
                  <hr />
                  <h6>
                    <strong>Status: {order.status}</strong>
                  </h6>
                </td>
                <td className="text-right my-td align-bottom">
                  <h4 className="mt-2">
                    <strong>Total:</strong>
                  </h4>
                </td>
                <td className="text-left my-td align-bottom">
                  <h4 className="mt-2">
                    <strong>{order.orderTotal.toLocaleString('en-EN')} SEK</strong>
                  </h4>
                </td>

                <td className="font-weight-bold my-td-1 text-center">
                  <div className="">
                    <button type="button" className="btn btn-blue btn-sm btn-block" onClick={() => dispatch(changeOrderStatus('processing', order._id))}>Processing</button><br />
                    <button type="button" className="btn btn-blue btn-sm btn-block" onClick={() => dispatch(changeOrderStatus('sent', order._id))}>Sent</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
