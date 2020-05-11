import React from 'react'
import { deleteUser } from '../../store/actions/admin'
import { useDispatch } from 'react-redux'

export const User = ({ user }) => {

  const dispatch = useDispatch()

  return (
    <tr>
      <th className="my-td text-left" scope="row">{user._id}</th>
      <td className="my-td text-left">{user.firstName}</td>
      <td className="my-td text-left">{user.lastName}</td>
      <td className="my-td text-left">{user.email}</td>
      <td className="my-td text-left">{user.role}</td>
      <td className="my-td">
        <div className="btn-group btn-group-sm" role="group" aria-label="quantity">
          <button className="btn btn-danger px-3" onClick={() => dispatch(deleteUser(user._id))}>
            Delete User
          </button>
        </div>
      </td>
    </tr>
  )
}
