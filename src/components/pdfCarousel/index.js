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
import { Carousel } from 'react-bootstrap'
import pdficon from '../../files/pdficon.png'
function PdfCarousel({ removeOverlay }) {
  const { prismicBlogpostBodyPdfslice } = useStaticQuery(
    graphql`
      query {
        prismicBlogpostBodyPdfslice {
          primary {
            tesco_pdf {
              link_type
              name
              kind
              url
              size
              target
            }
            boots_pdf {
              link_type
              name
              kind
              url
              size
              target
            }
            curtains_pdf {
              link_type
              name
              kind
              url
              size
              target
            }
          }
        }
      }
    `
  )
  const tesco = prismicBlogpostBodyPdfslice.primary.tesco_pdf.url;
  const tName = prismicBlogpostBodyPdfslice.primary.tesco_pdf.name;
  const boots = prismicBlogpostBodyPdfslice.primary.boots_pdf.url;
  const curtains = prismicBlogpostBodyPdfslice.primary.curtains_pdf.url;
  console.log(" tesco ", tesco);

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
        <img src={pdficon} alt={tName}/>
        </Carousel.Item>
        <Carousel.Item>
          <img src={pdficon} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={pdficon} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

PdfCarousel.defaultProps = {}

PdfCarousel.propTypes = {}

export default PdfCarousel
