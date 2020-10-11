import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

const Nav = () => (
  <div>
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
              allStrapiCategory {
                edges {
                  node {
                    strapiId
                    name
                  }
                }
              }
            }
          `}
          render={data => {
            return (
              <>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">{data.site.siteMetadata.title}</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {data.allStrapiCategory.edges.map((category, i) => {
                      return (
                        <li key={category.node.strapiId}>
                          <Link to={`/category/${category.node.strapiId}`}>
                            {category.node.name}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </>
            )
          }}
        />
      </nav>
    </div>
  </div>
)

export default Nav
