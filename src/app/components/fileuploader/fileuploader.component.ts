import { Component } from '@angular/core';
import { ImageStorageService } from '../../services/image-storage.service';

@Component({
  selector: 'app-fileuploader',
  standalone: true,
  imports: [],
  templateUrl: './fileuploader.component.html',
  styleUrl: './fileuploader.component.scss'
})
export class FileuploaderComponent {
  constructor(private imageStorage: ImageStorageService) { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.imageStorage.addFile(file);
  }
}
