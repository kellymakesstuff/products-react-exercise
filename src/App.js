import React from 'react'
import data from "./Data"
import Products from "./Products"
import ProductDetail from "./ProductDetail"
import "./App.css"
import { Link, Route } from "react-router-dom"


export default function App() {
  return <div>
    <header>
      <Link to="/"><h6>ProductsApp</h6></Link>
    </header>

    <main>
      <Route path="/" exact>
        <div className="allProductBox">
          {data.map(product => <Products data={product} />)}
        </div>
      </Route>

      <Route path="/:id">
        <ProductDetail data={data} />
      </Route>

    </main>
  </div>



}
