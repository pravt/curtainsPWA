import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Metadata = ({ websiteMeta }) => {
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
  const titleText = websiteMeta.title.text;
  const websiteDescription = websiteMeta.description.text;
  const metaTitle = titleText || data.site.siteMetadata.title
  const metaDescription = websiteDescription || data.site.siteMetadata.description
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <link href='https://css.gg/all.css' rel='stylesheet'/>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={titleText} />
      <meta property="og:image:width" content="250" />
      <meta property="og:image:height" content="250" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:description" content={websiteMeta.description.text} />
      <title>{`${titleText}`}</title>
      <title>{`${metaTitle} | ${data.site.siteMetadata.title}`}</title>
      <meta name="description" content={metaDescription} />
    </Helmet>
  )
}

export default Metadata