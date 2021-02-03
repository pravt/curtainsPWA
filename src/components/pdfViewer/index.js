import React from 'react'
function PdfViewer({ fileURL, closePreview }) {
const urlTorender = "https://docs.google.com/gview?embedded=true&url="+fileURL;
  return (
      <>
       <button
        type="button"
        className="overlay-close pdf-viewer-close"
        onClick={e => closePreview()}
      >
        Close
      </button>
      <iframe src={urlTorender} style={{width:"1000px", height:"800px"}} frameBorder="0" allowFullScreen></iframe>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
