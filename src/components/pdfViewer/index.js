import React from 'react'
function PdfViewer({ fileURL, closePreview }) {

  return (
      <>
        <div className="pdfIframeContainer">
        <iframe height="100%" width="100%" src={fileURL} frameBorder="0"/>
        </div>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
