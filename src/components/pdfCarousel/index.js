import React from 'react'
import { Carousel } from 'react-bootstrap'
import pdfIcon from '../../files/pdficon.png'
import PdfViewer from '../../components/pdfViewer'
import face from '../../files/face.png';
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
      <div className="pdf-flex">
      <div className="pdf-flex-item">
      <Carousel className={open ? 'hideCarousel' : ''} indicators={false}>
        {documents.map(item => {
          const {url, name} = item;
          return (
            <Carousel.Item key={name}>
              <div className="carouselMiddle" key={name}>
                <img
                alt=""
                  src={face}
                  onClick={e => {
                    setActivePdfUrl(url)
                    setOpen(!open)
                  }}
                />
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
      </div>
      </div>
    </div>
  )
}

PdfCarousel.defaultProps = {}

PdfCarousel.propTypes = {}

export default PdfCarousel
