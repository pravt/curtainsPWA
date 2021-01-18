const pdfBodyName = 'PrismicBlogpostBodyPdfslice';
const embedVideoSliceName = 'PrismicBlogpostBodyVideoMapSlice';
const socialSliceName = 'PrismicBlogpostBodySocial';

export const getPDfDocuments = data => {
  let documents = data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === pdfBodyName)
    .map(i => i.primary)[0]
  var result = []

  documents &&
    Object.keys(documents).map(k => {
      if (documents[k].name && documents[k].name.indexOf('.pdf') > 0) {
        result.push(documents[k])
      }
    })
  return result
}

export const getEmbedVideoURL = data => {
    let embedVideo = data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === embedVideoSliceName)
    .map(i => i.primary)[0];
    return embedVideo && embedVideo.embed_video_url ? embedVideo.embed_video_url.html: null;
}


export const getSocialUrls = data => {
  return data.prismicBlogpost.data.body
  .filter(item => item['__typename'] === socialSliceName)
  .map(i => i.primary)[0];
}
