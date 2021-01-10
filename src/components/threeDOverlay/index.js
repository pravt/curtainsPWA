import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

function ThreeDOverlay({ removeOverlay }) {
  const { allPrismicBlogpostBodyVideoMapSlice } = useStaticQuery(
    graphql`
      query {
        allPrismicBlogpostBodyVideoMapSlice {
          edges {
            node {
              id
              primary {
                matterport3dmodel {
                  provider_name
                  provider_url
                  version
                  thumbnail_width
                  height
                  thumbnail_url
                  thumbnail_height
                  title
                  width
                  html
                  type
                  embed_url
                }
              }
            }
          }
        }
      }
    `
  )

  const embedVideo =
    allPrismicBlogpostBodyVideoMapSlice.edges[0].node.primary.matterport3dmodel
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>
      <div id="iframe-wrapper" className="iframe-wrapper">
        <div dangerouslySetInnerHTML={{ __html: embedVideo.html }} />
      </div>
    </div>
  )
}

ThreeDOverlay.defaultProps = {
  vlink: '',
}

ThreeDOverlay.propTypes = {
  removeOverlay: PropTypes.func,
}
export default ThreeDOverlay
