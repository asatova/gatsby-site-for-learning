import  React from "react"
import {Link, graphql, useStaticQuery} from "gatsby";

export default function Navbar() {
    const  data = useStaticQuery(graphql
 `query SiteInfo {
  site {
    siteMetadata {
     title
    }
  }
}`
    )
    const  { title } = data.site.siteMetadata
    return (
        <section>
            <nav>
                <h1> { title }</h1>
                <div className="links">
                    <Link to="/">index</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Portfolio projects</Link>
                </div>
            </nav>
        </section>
    )
}
