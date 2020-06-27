import React from "react"
import { Helmet } from "react-helmet"

import "./catalog.css"

const CatalogPage = ({}) => {
  return (
    <div className="catalog-page">
      <Helmet>
        <title>魔道先祖</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="catalog-title">魔道先祖</h1>
      <ul className="catalog-list">
        <li className="catalog-list-item">
          <a href="/untamed/v1/catalog">第一版</a>
        </li>
        <li className="catalog-list-item">
          <a href="/untamed/v2/catalog">第二版</a>
        </li>
      </ul>
    </div>
  )
}

export default CatalogPage
