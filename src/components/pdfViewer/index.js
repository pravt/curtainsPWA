import React from 'react';
import { isMobile } from 'react-device-detect';
function PdfViewer({ fileURL, closePreview }) {
    //var encodedUrl = encodeURIComponent(fileURL);
    //let googleDocsBaseURL = 'https://docs.google.com/viewer?url=';

    //console.log(" file url ",fileURL);

    //const pdfURL = googleDocsBaseURL +encodedUrl + '&embedded=true';
    //const u ="https://360host.me/brochure/Portfolio/v1.pdf"
    if (isMobile) {
        return (
            <div>
                <object name="frame_1" data={fileURL} type="text/pdf" max-width="100%" height="800px">
                    <embed src={fileURL} id="embed_pdf" />
                </object>
            </div>
        );
    }else{
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
    }
  
}

PdfViewer.defaultProps = {};

PdfViewer.propTypes = {};

export default PdfViewer;
