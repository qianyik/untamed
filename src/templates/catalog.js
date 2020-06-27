import React from "react"
import { Helmet } from "react-helmet"

import "../pages/catalog.css"

const CatalogPage = ({ pageContext }) => {
  const listItems = pageContext.list.map((title, index) => {
    return (
      <li key={index} className="catalog-list-item">
        <a href={`/${pageContext.prefix}/${index + 1}`}>{title}</a>
      </li>
    )
  })

  return (
    <div className="catalog-page">
      <Helmet>
        <title>{pageContext.title}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="catalog-title">{pageContext.title} </h1>
      <h2 className="main-catalog">
        <a href="/catalog">Main Catalog</a>
      </h2>
      <ul className="catalog-list">{listItems}</ul>
    </div>
  )
}

export default CatalogPage
