import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ websiteMeta,title, description }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  const metaTitle = title || data.site.siteMetadata.title
  const metaDescription = description || data.site.siteMetadata.description
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <link href='https://css.gg/all.css' rel='stylesheet'/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={websiteMeta.title.text} />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content={websiteMeta.description.text} />
      <title>{`${websiteMeta.title.text}`}</title>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Metadata