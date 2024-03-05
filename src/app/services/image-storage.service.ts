import { Injectable } from '@angular/core';
import { FileStorage } from './file-storage.interface';
import { ImageModel } from '../models/image/image.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageStorageService implements FileStorage {

  private imageArray: ImageModel[] = [];
  private imagesSubject$ = new BehaviorSubject<ImageModel[]>(this.imageArray);
  public images$ = this.imagesSubject$.asObservable();

  /**
   * Adds a file or an ImageModel to the image array.
   * Files will be converted to ImageModel objects before being added to the array.
   * Subscribers will be notified when the image has been added.
   * 
   * @param imageFile - The file or ImageModel to be added.
   */
  addFile(imageFile: File | ImageModel): void {
    
    if (imageFile instanceof File) {
      // Create a new ImageModel from the file
      const image = new ImageModel(imageFile);
      this.imageArray.push(image);
      this.imagesSubject$.next(this.imageArray);
    }
    else {
      this.imageArray.push(imageFile);
      this.imagesSubject$.next(this.imageArray);
    }
  }

  /**
   * Retrieves the list of files as an observable.
   * 
   * @returns An observable that emits an array of ImageModel objects representing the files.
   */
  getFiles(): Observable<Array<ImageModel>> {
    return this.imagesSubject$.asObservable();
  }
}
