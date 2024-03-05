import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ImageModel } from '../../../models/image/image.model';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { ImageStorageService } from '../../../services/image-storage.service';

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

  constructor(
    public dialogRef: MatDialogRef<ImageUploadDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: File },
    private imageStorageService: ImageStorageService
  ) {
    this.image = new ImageModel(
      data.file,
      '', // description
      data.file.size.toString(), // size
      data.file.type.split('/')[1], // type
      data.file.name // name
    );

    // Generate a thumbnail here, setting `this.image.thumbnail` accordingly
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
