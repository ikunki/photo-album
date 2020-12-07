import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PhotoAlbumComponent } from '../photo-album/photo-album.component';
 
const routes: Routes = [
  { path: 'photos', component: PhotoAlbumComponent }
];
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AlbumRoutingModule { }
// Lazy Routing Module
