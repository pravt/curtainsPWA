import React from 'react'
function PdfViewer({ fileURL, closePreview }) {

  //var encodedUrl = encodeURIComponent(fileURL);
  //let googleDocsBaseURL = 'https://docs.google.com/viewer?url=';

  //console.log(" file url ",fileURL);

//const pdfURL = googleDocsBaseURL +encodedUrl + '&embedded=true';
//const u ="https://360host.me/brochure/Portfolio/v1.pdf"
  return (
      <>
       <button
        type="button"
        className="overlay-close pdf-viewer-close"
        onClick={e => closePreview()}
      >
        Close
      </button>
      <iframe title="image" src={fileURL} style={{width:"1000px", height:"800px"}} frameBorder="0" allowFullScreen></iframe>
        </>
  )
}

PdfViewer.defaultProps = {}

PdfViewer.propTypes = {}

export default PdfViewer
