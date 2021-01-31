import React from 'react';
import * as Icon from 'react-feather';
import PdfViewer from '../../components/pdfViewer';
function PdfCarousel({ documents, removeOverlay, pdfSlice }) {
  const [open, setOpen] = React.useState(true);
  const [activePdfUrl, setActivePdfUrl] = React.useState(undefined);
  const [openPDFViewer, setOpenPDFViewer] = React.useState(false);
  const [imageURL, setImageURL] = React.useState(pdfSlice.document_image_1.url);
  const [imageIndex, setImageIndex] = React.useState(1);
  const [documentURL, setDocumentURL] = React.useState(documents[0].url);
  return (
    <div className="overlay">
      <button type="button" className="overlay-close" onClick={e => removeOverlay()}>
        Close
      </button>
      {openPDFViewer && (
        <PdfViewer
          fileURL={activePdfUrl}
          closePreview={() => {
            setOpenPDFViewer(false);
            setOpen(true);
          }}
        />
      )}
      {open && (
        <div>
          <div className="pdf-flex-item">
            <img
              alt=""
              src={imageURL}
              onClick={e => {
                setActivePdfUrl(documentURL);
                setOpenPDFViewer(true);
                setOpen(false);
              }}
            />
          </div>
          <div className="pdf-flex-bottom-item">
            <Icon.ArrowLeftCircle
              onClick={() => {
                 if(imageIndex===1){
                  setImageIndex(3);
                }else
                {
                  setImageIndex(imageIndex - 1);
                }
                console.log(' url ', pdfSlice['document_image_' + `${imageIndex}`]['url']);
                setImageURL(pdfSlice['document_image_' + `${imageIndex}`]['url']);
                setDocumentURL(documents[imageIndex-1].url)
              }}
            />{' '}
            <Icon.ArrowRightCircle
              onClick={() => {
                if(imageIndex===3){
                  setImageIndex(1);
                }else
                {
                  setImageIndex(imageIndex + 1);
                }
               
                console.log(' url ', pdfSlice['document_image_' + `${imageIndex}`]['url']);
                setImageURL(pdfSlice['document_image_' + `${imageIndex}`]['url']);
                setDocumentURL(documents[imageIndex+1].url)
              }}
            />{' '}
          </div>
        </div>
      )}
      ;
    </div>
  );
}

PdfCarousel.defaultProps = {};

PdfCarousel.propTypes = {};

export default PdfCarousel;
