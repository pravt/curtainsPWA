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
      <iframe src={fileURL} style={{width:"1000px", height:"800px"}} frameBorder="0" allowFullScreen></iframe>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
