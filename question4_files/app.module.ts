import { BrowserModule } from '@angular/platform-browser';    
import { NgModule } from '@angular/core';    
import { FormsModule } from '@angular/forms';     
import { Routes, RouterModule } from '@angular/router'; 
import { ImageService } from 'src/app/shared/image.service';    
import { AppComponent } from './app.component';    
import { GalleryComponent } from './image-gallery/image-gallery.component';     
import { ImageDetailComponent } from './image-details/image-details.component';     
import { FilterimagesPipe  } from "./filterimages.pipe";
    
const routes: Routes = [];
@NgModule({    
  declarations: [    
    AppComponent,    
    GalleryComponent,     
    ImageDetailComponent,    
    FilterimagesPipe    
  ],    
  imports: [    
    BrowserModule,    
    FormsModule,    
    RouterModule.forRoot(routes)    
  ],    
  providers: [ImageService, FilterimagesPipe],    
  bootstrap: [AppComponent]    
})    
export class AppModule { }  