import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ImageModel } from '../../../models/image/image.model';
import { ImageStorageService } from '../../../services/image-storage.service';
import { MatButtonModule } from '@angular/material/button';

/**
 * Represents the component for displaying image details in a dialogue.
 */
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

  /**
   * Constructs a new instance of the ImageDetailsDialogueComponent.
   * @param dialogRef - The reference to the dialog.
   * @param data - The data containing the image details.
   * @param imageStorageService - The service for image storage.
   */
  constructor(
    public dialogRef: MatDialogRef<ImageDetailsDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImageModel,
    private imageStorageService: ImageStorageService
  ) {
    this.image = data;
  }

  /**
   * Closes the dialog when the user cancels the dialog by clicking Cancel or outside the dialog box.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
