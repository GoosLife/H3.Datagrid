import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImageUploadDialogueComponent } from '../dialogues/image-upload-dialogue/image-upload-dialogue.component';
import { ImageStorageService } from '../../services/image-storage.service';

@Component({
  selector: 'app-fileuploader',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './fileuploader.component.html',
  styleUrl: './fileuploader.component.scss'
})
export class FileuploaderComponent {
  constructor(public dialog: MatDialog, private imageStorageService: ImageStorageService) { }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      let dialogWidth = '50%';

      // Check if mobile
      if (window.innerWidth < 768) {
        dialogWidth = '80%';
      }

      const dialogRef = this.dialog.open(ImageUploadDialogueComponent, {
        width: dialogWidth,
        data: { file: file }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log(result);
          this.imageStorageService.addFile(result);
        }
      });
    }
  }
}
