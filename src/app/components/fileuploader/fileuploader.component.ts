import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageDialogueComponent } from '../dialogues/image-dialogue/image-dialogue.component';
import { ImageStorageService } from '../../services/image-storage.service';

@Component({
  selector: 'app-fileuploader',
  standalone: true,
  imports: [],
  templateUrl: './fileuploader.component.html',
  styleUrl: './fileuploader.component.scss'
})
export class FileuploaderComponent {
  constructor(public dialog: MatDialog, private imageStorageService: ImageStorageService) { }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const dialogRef = this.dialog.open(ImageDialogueComponent, {
        width: '250px',
        data: { file: file }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.imageStorageService.addFile(result);
        }
      });
    }
  }
}
