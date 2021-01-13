import React from 'react'
function PdfViewer({ fileURL, closePreview }) {

  return (
      <>
       <button
        type="button"
        className="overlay-close"
        onClick={e => closePreview()}
      >
        Close
      </button>
        <div className="pdfIframeContainer">
        <iframe height="100%" width="100%" src={fileURL} frameBorder="0"/>
        </div>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
