import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ImageStorageService } from '../../services/image-storage.service';

@Component({
  selector: 'app-datagrid',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule
  ],
  templateUrl: './datagrid.component.html',
  styleUrl: './datagrid.component.scss'
})
export class DatagridComponent {
  images$ = this.imageStorageService.images$;
  displayedColumns: string[] = ['name', 'type', 'size', 'thumbnail', 'description']; // Define displayedColumns here

  constructor(private imageStorageService: ImageStorageService) {}

  onRowClicked(row: any): void {
    // Implementation of what should happen when a row is clicked
    console.log(row);
  }
}
