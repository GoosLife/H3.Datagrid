import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FileuploaderComponent } from './components/fileuploader/fileuploader.component';
import { DatagridComponent as DataGridComponent } from './components/datagrid/datagrid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FileuploaderComponent,
    DataGridComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DataGrid';
}
