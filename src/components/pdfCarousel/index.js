import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Carousel } from 'react-bootstrap'
import pdficon from '../../files/pdficon.png';
import PdfViewer from '../../components/pdfViewer';
function PdfCarousel({ removeOverlay }) {
  const [open, setOpen] = React.useState(false);

  
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
   const tName = prismicBlogpostBodyPdfslice.primary.tesco_pdf.name;
  const boots = prismicBlogpostBodyPdfslice.primary.boots_pdf.url;
  const curtains = prismicBlogpostBodyPdfslice.primary.curtains_pdf.url;
  const primaryObject =  prismicBlogpostBodyPdfslice.primary;
  return (
    <div className="overlay">
      <button
        type="button"
        className="overlay-close"
        onClick={e => removeOverlay()}
      >
        Close
      </button>
      {open && <PdfViewer fileURL={boots} closePreview={() => setOpen(!open)}/>}
      <Carousel>
      {Object.keys(primaryObject).map(item=>{
        return (<Carousel.Item key={item.url}>
        <img src={pdficon} alt={tName} onClick={e => setOpen(!open)}/>
      </Carousel.Item>)
  })}
      </Carousel>
    </div>
  )
}

PdfCarousel.defaultProps = {}

PdfCarousel.propTypes = {}

export default PdfCarousel
