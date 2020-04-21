import { Injectable } from '@angular/core'    
@Injectable()    
export class ImageService {    
    allImages = [];    
    getImages() {    
        return this.allImages = Imagesdetails.slice(0);    
    }    
    getImage(id: number) {    
        return Imagesdetails.slice(0).find(Images => Images.id == id)    
    }    
} 

const Imagesdetails = [    
  { "id": 1, "brand": "forests", "url": "assets/Images/forests1.jpg" },    
  { "id": 2, "brand": "forests", "url": "assets/Images/forests2.jpg" },    
  { "id": 3, "brand": "forests", "url": "assets/Images/forests3.jpg" },    
  { "id": 4, "brand": "sky", "url": "assets/Images/sky1.jpg" },    
  { "id": 5, "brand": "sky", "url": "assets/Images/sky2.jpg" },    
  { "id": 6, "brand": "sky", "url": "assets/Images/sky3.jpg" },    
]    
