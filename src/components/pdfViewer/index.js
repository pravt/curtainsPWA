import React from 'react';
import { isMobile } from 'react-device-detect';
function PdfViewer({ fileURL, closePreview }) {
    
    /* if (isMobile) {
        let encodedUrl = encodeURIComponent(fileURL);
        let googleDocsBaseURL = 'https://docs.google.com/viewer?url=';
        const pdfURL = googleDocsBaseURL +encodedUrl + '&embedded=true';
        return (
            <div>
                <object name="frame_1" data={pdfURL} type="text/pdf" max-width="100%" height="800px">
                    <embed src={pdfURL} id="embed_pdf" />
                </object>
            </div>
        );
    } *///else{

        return (
            <>
                <button type="button" className="overlay-close pdf-viewer-close" onClick={e => closePreview()}>
                    Close
                </button>
    
                <div className="scroll-wrapper">
                    <iframe title="image" src={fileURL} frameBorder="0" allowFullScreen />
                </div>
            </>
        );      
    //}
  
}

PdfViewer.defaultProps = {};

PdfViewer.propTypes = {};

export default PdfViewer;
