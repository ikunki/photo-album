import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { AlbumRoutingModule } from './album-routing/album-routing.module';
import { PhotoAlbumComponent } from './photo-album/photo-album.component';
import { PhotoDetailsComponent } from './photo-album/photo-details.component';

@NgModule({
  imports: [
    CommonModule,
    AlbumRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    PhotoAlbumComponent,
    PhotoDetailsComponent
  ],
  entryComponents: [PhotoDetailsComponent]
})
export class AlbumModule {
  
  constructor() {
    console.log('AlbumModule');
  }
}
