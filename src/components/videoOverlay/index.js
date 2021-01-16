import React from 'react'
import PropTypes from 'prop-types'

function VideoOverlay({ embedVideoHtml, removeOverlay }) {
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
      <div className= "iframe-video-div" dangerouslySetInnerHTML={{ __html: embedVideoHtml }} />
       
      </div>
    </div>
  )
}

VideoOverlay.defaultProps = {
  embedVideoHtml: '',
}

VideoOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  embedVideoHtml: PropTypes.string
}
export default VideoOverlay
