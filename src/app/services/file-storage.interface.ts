/**
 * Represents a file storage interface.
 */
export interface FileStorage {
    /**
     * Adds a file to the storage.
     * @param file - The file to be added.
     */
    addFile(file: any): void;
}