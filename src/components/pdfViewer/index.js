import React from 'react'
function PdfViewer({ fileURL, closePreview }) {

  var encodedUrl = encodeURIComponent(fileURL);
  let googleDocsBaseURL = 'https://docs.google.com/viewer?url=';

const pdfURL = googleDocsBaseURL +encodedUrl + '&embedded=true';
  return (
      <>
       <button
        type="button"
        className="overlay-close pdf-viewer-close"
        onClick={e => closePreview()}
      >
        Close
      </button>
      <iframe title="image" src={pdfURL} style={{width:"1000px", height:"800px"}} frameBorder="0" allowFullScreen></iframe>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
