import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

import "./novel.css"

const Novel = ({ pageContext }) => (
  <div className="page">
    <Helmet>
      <title>{pageContext.title}</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>

    <h1 className="title">{pageContext.title}</h1>

    {/* <div className="novel-link-top">
      <Link to="/catalog" className="novel-link-item">
        Catalog
      </Link>
    </div> */}

    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: pageContext.content }}
    />

    <div className="novel-link">
      {pageContext.id > 1 && (
        <Link to={`/untamed/${pageContext.id - 1}`} className="novel-link-item">
          Previous
        </Link>
      )}
      <Link to="/catalog" className="novel-link-item">
        Catalog
      </Link>
      {pageContext.id < 127 && (
        <Link to={`/untamed/${pageContext.id + 1}`} className="novel-link-item">
          Next
        </Link>
      )}
    </div>
  </div>
)

export default Novel
