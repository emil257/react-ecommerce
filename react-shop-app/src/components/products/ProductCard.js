import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  return (
    <div className="col mb-4">
      <div className="card">

        <div className="view overlay">
          <img src={product.image} className="card-img-top" alt="" />
          <Link to={"/product/" + product._id}>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <span className="red-text font-weight-bold">
            <strong>{product.price.toLocaleString('en-EN')} SEK</strong>
          </span>
          <p className="card-text">{product.short}</p>
        </div>
        <Link to={"/product/" + product._id} className="btn btn-light-blue btn-md" > Visa product</Link>
      </div >
    </div >
  )
}
