import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuploaderComponent } from './fileuploader.component';

describe('FileuploaderComponent', () => {
  let component: FileuploaderComponent;
  let fixture: ComponentFixture<FileuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileuploaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
