/**
 * PdfCarousel component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { Carousel} from 'react-bootstrap';
import pdficon from '../../files/pdficon.png'
function PdfCarousel({ removeOverlay }) {

  return (
    <div className="overlay">
    <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>
    <Carousel>
        <Carousel.Item>
        <img src={pdficon} onClick={() => console.log("click")}></img>
        </Carousel.Item>
        <Carousel.Item>
        <img src={pdficon}></img>
        </Carousel.Item>
        <Carousel.Item>
        <img src={pdficon}></img>
        </Carousel.Item>
    </Carousel>
  </div>
  )
}

PdfCarousel.defaultProps = {
  
}

PdfCarousel.propTypes = {
  
}

export default PdfCarousel
