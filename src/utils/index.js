export const getPDfDocuments = (data) => {
    const documents = data.prismicBlogpost.data.body.filter(item=>item['__typename'] === 'PrismicBlogpostBodyPdfslice').map(i=>i.primary)[0];
   var result = [];
  
   documents &&  Object.keys(documents).map(k=>{
        if(documents[k].name.indexOf('.pdf')>0){
            result.push(documents[k]);
        }
    })
    return result;
}