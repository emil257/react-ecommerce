import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, logout } from '../../store/actions/user'
import { Link } from 'react-router-dom'

export const UserSettings = () => {
  const user = useSelector(state => state.user.user)
  const loggedIn = useSelector(state => state.user.loggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  if (loggedIn) {
    return (
      <div>
        <div className="d-flex justify-content-between align-items-center flex-column">
          <i className="fas fa-user-circle fa-4x text-muted my-2"></i>
          <span className="mt-1" >{user.firstName}</span>
          <button className="btn btn-link closeNav" onClick={() => dispatch(logout())}>Logout</button>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="py-1 px-2 d-flex justify-content-between align-items-center flex-column">
        <Link className="p-0" to="/profile/login"><button className="btn btn-info btn-block closeNav width-100">Login</button></Link>
      </div>
      {/* <div className="d-flex justify-content-between align-items-center flex-column">
        <i className="fas fa-user-circle fa-4x text-muted my-2"></i>
        <span className="mt-1">first name</span>
        <button className="btn btn-link closeNav" >Logout</button>
      </div> */}
    </div>
  )
}
