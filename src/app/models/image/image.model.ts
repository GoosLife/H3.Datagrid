export class ImageModel {
  file: File;
  name: string;
  type: string;
  size: string;
  description: string;
  url: string = '';

  constructor(file: File, description: string = 'No description provided', size: string = '', type: string = '', name: string = '') {
    // Check that file is actually an image
    if (!this.filter(file)) {
      throw new Error('Only images are allowed in the image storage');
    }

    if (size == '') {
      size = file.size.toString();
    }

    if (type == '') {
      type = file.type;
    }

    if (name == '') {
      name = file.name;
    }

    this.file = file;
    this.name = name;
    this.type = type;
    this.size = size;
    this.description = description;
    this.getUrl(this.file);
  }

  /**
   * Check that file is an image - this is a rudimentary check that doesn't do much validation at all,
   * but it demonstrates how the implementations of the FileStorage interface can be used to enforce rules.
   *
   * Here, we could also check for file integrity and other things that are specific to images, to ensure
   * that only images are added to the image storage, and that they haven't been tampered with.
   * 
   * @param image 
   * @returns true, if the file is an image
   */
  private filter(file: File): boolean {
    return file.type.split('/')[0] === 'image';
  }

  private getUrl(file: File): void {
    const reader = new FileReader();
    reader.onload = (result: any) => {
      this.url = result.target.result;
    };
    reader.readAsDataURL(file);
  }
}
