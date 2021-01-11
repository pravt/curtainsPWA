import React from 'react'
import PropTypes from 'prop-types'

function Wrapper({ bgurl, children }) {
   return (
    <div className="flex-container" style={{backgroundImage: "url("+bgurl+")"}}>
     <div className="flex-item">
      {children}
      </div>
    </div>
  )
}

Wrapper.defaultProps = {
    bgurl: '',
}

Wrapper.propTypes = {
    bgurl: PropTypes.string
}
export default Wrapper
