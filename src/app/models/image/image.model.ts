export class ImageModel {
  file: File;
  name: string;
  type: string;
  size: string;
  description: string;
  url: string = '';

  constructor(file: File, description: string = 'No description provided', size: string = '', type: string = '', name: string = '') {
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
    this.setUrl(this.file);
  }

  /**
   * Check that file is an image.
   * This is a rudimentary check; files can call themselves images without it being true.
   * But it's a good demonstration of how the image model can be used to perform verification checks,
   * even if this particular check is not very thorough.
   * 
   * @param file - The file to be checked.
   * @returns True if the file is an image, false otherwise.
   */
  private filter(file: File): boolean {
    return file.type.split('/')[0] === 'image';
  }

  /**
   * Reads the file as a Data URL and sets the `url` property of the class.
   * The url property will be a Base64 encoded string, which can be set directly as src on an img element.
   * @param file - The file to read.
   */
  private setUrl(file: File): void {
    const reader = new FileReader();
    reader.onload = (result: any) => {
      this.url = result.target.result;
    };
    reader.readAsDataURL(file);
  }
}
