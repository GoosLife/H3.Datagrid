import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ImageModel } from '../../../models/image/image.model';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ImageStorageService } from '../../../services/image-storage.service';

/**
 * Component for the image upload dialogue.
 */
@Component({
  selector: 'app-image-dialogue',
  standalone: true,
  imports: [
    FormsModule, // For ngModel
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './image-upload-dialogue.component.html',
  styleUrl: './image-upload-dialogue.component.scss'
})
export class ImageUploadDialogueComponent {
  image: ImageModel;

  /**
   * Constructs a new instance of the ImageUploadDialogueComponent.
   * @param dialogRef - The reference to the dialog.
   * @param data - The data passed to the dialog.
   * @param imageStorageService - The service for image storage.
   */
  constructor(
    public dialogRef: MatDialogRef<ImageUploadDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: File },
    private imageStorageService: ImageStorageService
  ) {
    this.image = new ImageModel(
      data.file,
      '', // description - there is no description until the user specifies it within this dialogue
      data.file.size.toString(), // size
      data.file.type.split('/')[1], // type
      data.file.name // name
    );

    // Generate a thumbnail here, setting `this.image.thumbnail` accordingly
  }

  /**
   * Closes the dialog.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
