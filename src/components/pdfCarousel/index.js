import React from 'react'
import { graphql } from 'gatsby'
import { Carousel } from 'react-bootstrap'
import pdficon from '../../files/pdficon.png'
import PdfViewer from '../../components/pdfViewer'
function PdfCarousel({ removeOverlay }) {
  const [open, setOpen] = React.useState(false)
  const [activePdfUrl, setActivePdfUrl] = React.useState(undefined)

  const { prismicBlogpostBodyPdfslice } = graphql`
      query($uid: String) {
          prismicBlogpost(uid: { eq: $uid }) {
            uid
            id
            data {
              logo_image {
                url
              }
              body {
                ... on PrismicBlogpostBodyPdfslice {
                  primary {
                    document_1 {
                      url
                    }
                    document_2 {
                      url
                    }
                    document_3 {
                      url
                    }
                  }
                }
                __typename
              }
            }
          }
      }
    `
  const primaryObject = prismicBlogpostBodyPdfslice.primary
  console.log(' primaryObject ', primaryObject)
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>
      {open && (
        <PdfViewer fileURL={activePdfUrl} closePreview={() => setOpen(!open)} />
      )}
      <Carousel className={open ? 'hideCarousel' : ''} indicators={false}>
        {Object.keys(primaryObject).map(item => {
          const url = primaryObject[item].url
          const name = primaryObject[item].name
          return (
            <Carousel.Item key={item}>
              <div className="carouselBottom" key={item}>
                <img
                  src={pdficon}
                  onClick={e => {
                    setActivePdfUrl(url)
                    setOpen(!open)
                  }}
                />
                <p>{name.substring(0, name.indexOf('.pdf'))}</p>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

PdfCarousel.defaultProps = {}

PdfCarousel.propTypes = {}

export default PdfCarousel
