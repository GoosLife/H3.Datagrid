import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUploadDialogueComponent } from './image-upload-dialogue.component';

describe('ImageDialogueComponent', () => {
  let component: ImageUploadDialogueComponent;
  let fixture: ComponentFixture<ImageUploadDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageUploadDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageUploadDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
