import React from 'react'
import { Link, Route, withRouter } from "react-router-dom"

function Products(data) {
  console.log("after click", data)
  return (
    <div className="productBox">
      <Link to={`${data.data._id}`}>
        <img src={data.data.imgURL} alt={data.data.name} />
        <h2>{data.data.name}</h2>
        <h4>${data.data.price}</h4>
      </Link>
    </div >
  )
}

export default withRouter(Products)