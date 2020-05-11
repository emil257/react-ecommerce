import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCartTotalItems } from '../../store/actions/products'

import { Link } from 'react-router-dom'
import { ShoppingCart } from '../shoppingcart/ShoppingCart'
import { UserSettings } from '../user/UserSettings'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBIcon } from "mdbreact";



export const Navbar = () => {

  const totalItems = useSelector(state => state.products.cartTotalProducts)
  const cart = useSelector(state => state.products.cart)
  const role = useSelector(state => state.user.user.role)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadCartTotalItems())
  }, [cart, dispatch])

  const adminLinkRender = () => {
    if (role === 'admin') {
      return (
        <li className="nav-item">
          <Link className="nav-link closeNav" to="/admin">Admin</Link>
        </li>
      )
    }
  }

  return (
    <nav className="mb-1 navbar navbar-expand-lg navbar-dark info-color fixed-top scrolling-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <i className="fab fa-shopware"></i> shopware.se
      </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-333"
          aria-controls="navbarSupportedContent-333"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
          <ul className="navbar-nav mr-auto text-right">
            <li className="nav-item">
              <Link className="nav-link closeNav" to="/">Nyheter</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link closeNav" to="/clothes">Kläder</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link closeNav" to="/shoes">Skor</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link closeNav" to="/profile">Profile</Link>
            </li>
            {
              adminLinkRender()
            }
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons float-right">
            {/* <!-- ShoppingCart --> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link mr-4"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="!#"
              >
                {totalItems}
                <i className="fas fa-shopping-cart"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">
                <ShoppingCart />
              </div>
            </li> */}
            <div className="my-custom-dropdown">
              <MDBDropdown >
                <MDBDropdownToggle nav className="mr-2 my-drop-icon-class">
                  {totalItems} <MDBIcon icon="shopping-cart" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-default shopping-cart">
                  <ShoppingCart />
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
            {/* <!-- UserSettings --> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                type="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                href="!#"
              >
                <i className="fas fa-user"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right z-depth-2">
                <UserSettings />
              </div>
            </li> */}
            <div className="my-custom-dropdown">
              <MDBDropdown>
                <MDBDropdownToggle nav caret className="mr-2 my-drop-icon-class">
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu right basic className="dropdown-menu">
                  <UserSettings />
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>

          </ul>
        </div>
      </div>
    </nav>
  )
}

