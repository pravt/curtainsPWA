import React from 'react'
function PdfViewer({ fileURL, closePreview }) {

  return (
      <>
        <div className="pdfIframeContainer">
        <iframe src={fileURL} frameBorder="0"/>
        </div>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
