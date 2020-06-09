import React from 'react'
import { Link, Route, withRouter } from "react-router-dom"

function ProductDetail(data) {

  console.log("product detail", data)
  const SelectedPaint = data.data.find(paint => {
    return paint._id == data.match.params.id
  })
  console.log(SelectedPaint)


  return <>
    {SelectedPaint && <div className="productDetailBox">
      <img src={SelectedPaint.imgURL} alt={SelectedPaint.name} />
      <div className="productInfoBox">
        <h2>{SelectedPaint.name}</h2>
        <h4>${SelectedPaint.price}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div >}
  </>


}

export default withRouter(ProductDetail)
