import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageModel } from '../../../models/image/image.model';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

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
  ],
  templateUrl: './image-dialogue.component.html',
  styleUrl: './image-dialogue.component.scss'
})
export class ImageDialogueComponent {
  image: ImageModel;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { file: File }
  ) {
    this.image = new ImageModel(
      data.file,
      '', // description
      data.file.size.toString(), // size
      data.file.type, // type
      data.file.name // name
    );

    // Generate a thumbnail here, setting `this.image.thumbnail` accordingly
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
