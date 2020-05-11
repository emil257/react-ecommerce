import React from 'react'

export const Shipping = ({ shipping, changeEditState }) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 my-label">
          <label className="m-0">Country</label>
        </div>
        <div className="col-md-9">
          <p className="my-margin-16">{shipping.country}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 my-label">
          <label className="m-0">City</label>
        </div>
        <div className="col-md-9">
          <p className="my-margin-16">{shipping.city}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 my-label">
          <label className="m-0">Postal</label>
        </div>
        <div className="col-md-9">
          <p className="my-margin-16">{shipping.postal}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 my-label">
          <label className="m-0">Adress line</label>
        </div>
        <div className="col-md-9">
          <p className="my-margin-16">{shipping.adressline}</p>
        </div>
      </div>
      <button className="btn btn-info btn-md mt-3 ml-0" onClick={() => changeEditState(true)}>Edit Adress</button>
    </div >
  )
}
