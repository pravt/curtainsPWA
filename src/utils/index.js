const bodyName = 'PrismicBlogpostBodyPdfslice'
export const getPDfDocuments = data => {
  let documents = data.prismicBlogpost.data.body
    .filter(item => item['__typename'] === bodyName)
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
