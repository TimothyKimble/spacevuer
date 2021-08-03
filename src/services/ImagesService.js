import { AppState } from "../AppState"
import { Image } from "../models/Image"
import { imageApi } from "./AxiosService"

class ImagesService{

  async getImages(query){
    try {
      const res = await imageApi.get('apod?api_key=X1BC416JyX1gugZvDBMADMlOMkwgGD2Rlo0SXujb&date='+query)
      console.log(res.data)
      AppState.activeImage = new Image(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  setActiveImage(image){
    console.log('setting Image', image)
    AppState.activeImage = image
  }
}

export const imagesService = new ImagesService()