import { Observable } from "rxjs";

export interface FileStorage {
    addFile(file: any): void;
}