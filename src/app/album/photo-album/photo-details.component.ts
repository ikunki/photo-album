import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { DataService } from '../../shared/data.service';
import { IPhotoAlbumItem } from '../../_interface/photo-album.model';

@Component({
  selector: 'app-photo-details',
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photoAlbum: IPhotoAlbumItem[] = [];
  photo!: IPhotoAlbumItem;

  constructor(private dataService: DataService, public dialogRef: MatDialogRef<PhotoDetailsComponent>) {
  }

  async ngOnInit() {
    const data$ = this.dataService.getPhotoAlbumData('photos');
    this.photoAlbum = await data$.toPromise();
    this.photo = this.photoAlbum.find(e => e.title == this.dialogRef.id) as IPhotoAlbumItem;
  }

  close() {
    this.dialogRef.close();
  }
}
