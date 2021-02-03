import React from 'react'
function PdfViewer({ fileURL, closePreview }) {
const urlTorender = "https://drive.google.com/viewerng/viewer?embedded=true&url="+fileURL;
  return (
      <>
       <button
        type="button"
        className="overlay-close pdf-viewer-close"
        onClick={e => closePreview()}
      >
        Close
      </button>
        <div className="pdfIframeContainer">
        <embed src={fileURL} width="100%" height="100%"/>
        </div>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
