import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ImageModel } from '../../../models/image/image.model';
import { ImageStorageService } from '../../../services/image-storage.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-image-details-dialogue',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './image-details-dialogue.component.html',
  styleUrl: './image-details-dialogue.component.scss'
})
export class ImageDetailsDialogueComponent {
  image: ImageModel;

  constructor(
    public dialogRef: MatDialogRef<ImageDetailsDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageModel,
    private imageStorageService: ImageStorageService
  ) {
    this.image = data;

    // Generate a thumbnail here, setting `this.image.thumbnail` accordingly
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
