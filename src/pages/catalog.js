import React from "react"
import { Helmet } from "react-helmet"

import "./catalog.css"

const CatalogPage = () => {
  const untamed = require("../../data/untamedV1.json")

  const listItems = untamed.map((chapter, index) => {
    return (
      <li key={index}>
        <a href={`/untamed/${index + 1}`}>{chapter.title}</a>
      </li>
    )
  })

  return (
    <div className="catalog-page">
      <Helmet>
        <title>魔道先祖</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 className="catalog-title">魔道先祖</h1>
      <ul className="catalog-list">{listItems}</ul>
    </div>
  )
}

export default CatalogPage
