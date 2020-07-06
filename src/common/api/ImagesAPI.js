const baseURL = 'https://pixabay.com/api/'
const clientKey = process.env.REACT_APP_PIXABAY_API_KEY;

const imagesPerPage = 10

export const fecthMoreImages = async (currentPage) => {
  try{
    const moreImagesCompleteURL = baseURL+'?key='+clientKey+'&page='+currentPage+'&per_page='+imagesPerPage
    const response = await fetch(moreImagesCompleteURL)
    const data = await response.json()
    if(response.status !== 200){
      throw new Error(data.errors)
    }
    const elements = []
    data.hits.forEach(element => {
      const image = {}
      image.src = element.largeImageURL
      image.thumbnail = element.previewURL
      image.thumbnailWidth = element.previewWidth
      image.thumbnailHeight = element.previewHeight
      image.caption = element.tags
      elements.push(image)
    });
    return elements
  }catch (e) {
    throw new Error("Error fetching the images")
  }
}