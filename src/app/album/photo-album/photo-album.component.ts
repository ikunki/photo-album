import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataService } from '../../shared/data.service';
import { IPhotoAlbumItem } from '../../_interface/photo-album.model';
import { PhotoDetailsComponent } from './photo-details.component';

@Component({
  selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.css']
})
export class PhotoAlbumComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['title', 'thumbnailUrl'];
  public dataSource = new MatTableDataSource<IPhotoAlbumItem>();
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  constructor(private dataService: DataService, private matDialog: MatDialog) { }
 
  ngOnInit() {
    this.getAllPhotos();
  }
 
  public getAllPhotos = () => {
    this.dataService.getPhotoAlbumData('photos')
    .subscribe(res => {
      this.dataSource.data = res as IPhotoAlbumItem[];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public openDialog(title: string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.id = title;
    this.matDialog.open(PhotoDetailsComponent, dialogConfig);
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public customSort = (event) => {
    console.log(event);
  }
}
