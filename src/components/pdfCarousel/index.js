import React from 'react'
import { Carousel } from 'react-bootstrap'
import pdfIcon from '../../files/pdficon.png'
import PdfViewer from '../../components/pdfViewer'

function PdfCarousel({ documents, removeOverlay }) {
  const [open, setOpen] = React.useState(false)
  const [activePdfUrl, setActivePdfUrl] = React.useState(undefined)
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
        {documents.map(item => {
          const {url, name} = item;
          return (
            <Carousel.Item key={name}>
              <div className="carouselBottom" key={name}>
                <img
                alt=""
                  src={pdfIcon}
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
