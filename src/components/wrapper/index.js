import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function Wrapper({ bgurl, children }) {
  const bgstyle = 'background-image: ' + 'url(' + bgurl + ')'
  return (
    <>
      <Helmet>
        <body style={bgstyle} className="body-bg-image" />
      </Helmet>
      <div className="container-fluid p-0">
        <div className="d-flex flex-container">
          <div className="flex-item">{children}</div>
        </div>
      </div>
    </>
  )
}

Wrapper.defaultProps = {
  bgurl: '',
}

Wrapper.propTypes = {
  bgurl: PropTypes.string,
}
export default Wrapper
