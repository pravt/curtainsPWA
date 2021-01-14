import React from 'react'
import PropTypes from 'prop-types'
import Iframe from "react-iframe";

function DegreeOverlay({ removeOverlay, modelUrl }) {
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
      <Iframe
        url={modelUrl}
        width="100%"
        height="100%"
        id="myId"
        className="myClassname"
        display="initial"
        position="absolute"
        
      />
      </div>
    </div>
  )
}

DegreeOverlay.defaultProps = {
  modelUrl: '',
}

DegreeOverlay.propTypes = {
  removeOverlay: PropTypes.func,
  modelUrl: PropTypes.string
}
export default DegreeOverlay
