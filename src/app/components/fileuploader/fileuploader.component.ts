import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImageUploadDialogueComponent } from '../dialogues/image-upload-dialogue/image-upload-dialogue.component';
import { ImageStorageService } from '../../services/image-storage.service';

/**
 * Component for uploading files.
 */
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

  /**
  * Opens a dialog to upload the selected file and adds it to the image storage service.
  * @param event - The event object containing the selected file.
  */
  showUploadDialog(file: File) {
    let dialogWidth = '50%';

    // Check if mobile, and set width accordingly
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

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.showUploadDialog(file);
    }
  }
}
