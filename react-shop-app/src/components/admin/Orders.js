import React from 'react'
import { Order } from './Order'

export const Orders = ({ orders }) => {

  const renderOrders = () => {
    if (orders !== undefined) {
      return orders.map(order => {
        return (<Order key={order._id} order={order} />)
      })
    }
  }
  return renderOrders()
}
