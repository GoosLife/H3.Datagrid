import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ImageStorageService } from '../../services/image-storage.service';
import { Observable } from 'rxjs';
import { ImageModel } from '../../models/image/image.model';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ImageDetailsDialogueComponent } from '../dialogues/image-details-dialogue/image-details-dialogue.component';

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
  images$: Observable<Array<ImageModel>>;
  dataSource = new MatTableDataSource<ImageModel>();
  displayedColumns: string[] = ['name', 'thumbnail', 'description'];

  constructor(private dialog: MatDialog, private imageStorageService: ImageStorageService) {
    this.images$ = this.imageStorageService.getFiles();
  }

  ngOnInit(): void {
    this.imageStorageService.images$.subscribe(files => {
      console.log('Received files: ', files);
      this.dataSource.data = files;
    })
  }

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

  getUrl(file: File) {
    const reader = new FileReader();
    reader.onloadend = () => {
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
