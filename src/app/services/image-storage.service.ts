import { Injectable } from '@angular/core';
import { FileStorage } from './file-storage.interface';
import { ImageModel } from '../models/image/image.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService implements FileStorage {

  private images = new BehaviorSubject<ImageModel[]>([]);
  public images$ = this.images.asObservable();

  addFile(imageFile: File): void {
    const currentImages = this.images.value;

    // Create a new ImageModel from the file
    const image = new ImageModel(imageFile);

    const updatedImages = [...currentImages, image];
    this.images.next(updatedImages);
  }
}
