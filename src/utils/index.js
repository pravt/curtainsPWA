const videoMapSlice = 'PrismicBlogpostBodyVideoMapSlice'
const pdfBodyName = 'PrismicBlogpostBodyPdfslice'
const socialSliceName = 'PrismicBlogpostBodySocial'
const menuSliceName = 'PrismicBlogpostBodyMenu'
const websiteMeta = 'PrismicBlogpostBodyWebsitemeta'

export const getWebsiteHeaderData = data => {
  const websiteData = data.prismicBlogpost.data
  let logoUrl = websiteData.website_main_logo.url;
  logoUrl = logoUrl.substring(0, logoUrl.indexOf('?auto'))
  return {
    backgroundImage: websiteData.website_background_image.url,
    logoImage: logoUrl,
    name: websiteData.name,
    logoDescription: websiteData.logo_description.text,
    footerLineImage: websiteData.footer_line_image.url,
    footerImage: websiteData.footer_image.url,
  }
}

export const getVideoMapSlice = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === videoMapSlice)
    .map(i => i.primary)[0]
  //return embedVideo && embedVideo.embed_video_url ? embedVideo.embed_video_url.html: null;
}

export const getPDFSlice = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === pdfBodyName)
    .map(i => i.primary)[0];
}

export const getPDFDocuments = data => {
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

export const getMenuData = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === menuSliceName)
    .map(i => i.primary)[0]
}

export const getSocialUrls = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === socialSliceName)
    .map(i => i.primary)[0]
}

export const getWebsiteMeta = data => {
  return data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === websiteMeta)
    .map(i => i.primary)[0]
}
