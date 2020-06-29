import React from "react"
import { Helmet } from "react-helmet"

import "./catalog.css"

const CatalogPage = ({}) => {
  return (
    <div className="catalog-page">
      <Helmet>
        <title>魔道先祖</title>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/kamalia/image/upload/v1559861791/logo_kxcn4i.png"
        ></link>
      </Helmet>
      <h1 className="catalog-title">魔道先祖</h1>
      <ul className="catalog-list">
        <li className="catalog-list-item">
          <a href="/untamed/v1/catalog">第一版</a>
        </li>
        <li className="catalog-list-item">
          <a href="/untamed/v1/t/catalog">第一版 - 台湾</a>
        </li>
        <li className="catalog-list-item">
          <a href="/untamed/v2/catalog">第二版</a>
        </li>
        <li className="catalog-list-item">
          <a href="/untamed/v3/catalog">第三版 - 台湾</a>
        </li>
      </ul>
    </div>
  )
}

export default CatalogPage
