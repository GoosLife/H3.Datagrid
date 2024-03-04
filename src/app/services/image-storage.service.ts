import { Injectable } from '@angular/core';
import { FileStorage } from './file-storage.interface';
import { ImageModel } from '../models/image/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService implements FileStorage {

  Images: ImageModel[];

  constructor() {
    this.Images = [];
  }

  addFile(imageFile: File): void {
    try {
      const image = new ImageModel(imageFile);
      this.Images.push(image);
    }
    catch(e) {
      console.error(e);
      return;
    }
  }

  getAll(): ImageModel[] {
    return this.Images;
  }
}
