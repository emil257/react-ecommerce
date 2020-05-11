import React from 'react'
import { User } from './User'

export const Users = ({ users }) => {
  return (
    <table className="table table-sm">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => {
            return (<User key={user._id} user={user} />)
          })
        }
      </tbody>
    </table>
  )
}
