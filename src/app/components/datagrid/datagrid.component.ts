import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Observable } from 'rxjs';

import { ImageModel } from '../../models/image/image.model';
import { ImageStorageService } from '../../services/image-storage.service';
import { ImageDetailsDialogueComponent } from '../dialogues/image-details-dialogue/image-details-dialogue.component';

/**
 * Represents the DatagridComponent.
 */
@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent implements OnInit {
  
  // Image stream from the image storage service.
  images$: Observable<Array<ImageModel>>;

  dataSource = new MatTableDataSource<ImageModel>();
  displayedColumns: string[] = ['name', 'thumbnail', 'description'];

  constructor(private dialog: MatDialog, private imageStorageService: ImageStorageService) {
    this.images$ = this.imageStorageService.getFiles();
  }

  // On init, subscribe to images from the data source and update the data source when new images are added.
  ngOnInit(): void {
    this.imageStorageService.images$.subscribe(files => {
      console.log('Received files: ', files);
      this.dataSource.data = files;
    })
  }

  /**
   * Opens a modal box containing specific information about a row when it is clicked.
   * @param row - The clicked row object.
   */
  onRowClicked(row: any): void {
    let dialogWidth = '80%';

    const dialogRef = this.dialog.open(ImageDetailsDialogueComponent, {
      width: dialogWidth,
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  /**
   * Converts a file to a Base64 encoded string, which can be set directly as src on an img element.
   * @param file - The file object (must be an image).
   */
  getUrl(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
