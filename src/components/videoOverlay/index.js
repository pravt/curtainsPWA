import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

function VideoOverlay({ removeOverlay, vlink }) {
  const { allPrismicBlogpostBodyVideoMapSlice } = useStaticQuery(
    graphql`
      query {
        allPrismicBlogpostBodyVideoMapSlice {
          edges {
            node {
              id
              primary {
                embed_video_url {
                  provider_name
                  provider_url
                  title
                  author_name
                  author_url
                  type
                  height
                  width
                  version
                  thumbnail_height
                  thumbnail_width
                  thumbnail_url
                  html
                  embed_url
                }
              }
            }
          }
        }
      }
    `
  )

  const embedVideo = allPrismicBlogpostBodyVideoMapSlice.edges[0].node.primary.embed_video_url;
  const urlToPlay = vlink.replace(/watch/g, 'embed')
  console.log(urlToPlay)
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

VideoOverlay.defaultProps = {
  vlink: '',
}

VideoOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  vlink: PropTypes.string,
}
export default VideoOverlay
