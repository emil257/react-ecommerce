import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loadOrders } from '../../store/actions/order'
import { Order } from './Order'

export const Orders = () => {
  const user = useSelector(state => state.user.user)
  const orders = useSelector(state => state.order.orders)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadOrders(user._id))
  }, [dispatch, user._id])

  const renderOrders = () => {
    if (orders !== undefined) {
      return orders.map(order => {
        return (<Order key={order._id} order={order} />)
      })
    }
  }

  return (
    <div>
      {
        renderOrders()
      }
    </div>
  )
}
