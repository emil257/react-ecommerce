import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateDetails } from '../../store/actions/user'

export const EditShipping = ({ shipping, changeEditState }) => {


  const dispatch = useDispatch()

  const [country, set_country] = useState(shipping.country)
  const [city, set_city] = useState(shipping.city)
  const [postal, set_postal] = useState(shipping.postal)
  const [adressline, set_adressline] = useState(shipping.adressline)

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const details = {
      country: country,
      city: city,
      postal: postal,
      adressline: adressline
    }
    changeEditState(false)
    dispatch(updateDetails(details))
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-3 my-label">
            <label className="m-0">Country</label>
          </div>
          <div className="col-md-7">
            <input
              value={country}
              onChange={e => set_country(e.target.value)}
              className="form-control my-input"
              type="text"
              placeholder={shipping.country}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-label">
            <label className="m-0">City</label>
          </div>
          <div className="col-md-7">
            <input
              value={city}
              onChange={e => set_city(e.target.value)}
              className="form-control my-input"
              type="text"
              placeholder={shipping.city}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-label">
            <label className="m-0">Postal</label>
          </div>
          <div className="col-md-7">
            <input
              value={postal}
              onChange={e => set_postal(e.target.value)}
              className="form-control my-input"
              type="text"
              placeholder={shipping.postal}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 my-label">
            <label className="m-0">Adress line</label>
          </div>
          <div className="col-md-7">
            <input
              value={adressline}
              onChange={e => set_adressline(e.target.value)}
              className="form-control my-input"
              type="text"
              placeholder={shipping.adressline}
            />
          </div>
        </div>
        <button className="btn btn-info btn-md mt-3 ml-0">Save Adress</button>
      </form>
      <button className="btn btn-warning btn-md ml-0" onClick={() => changeEditState(false)}>Cancel</button>
    </div>
  )
}
