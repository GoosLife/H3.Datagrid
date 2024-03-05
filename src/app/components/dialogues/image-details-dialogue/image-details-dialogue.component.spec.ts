import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsDialogueComponent } from './image-details-dialogue.component';

describe('ImageDetailsDialogueComponent', () => {
  let component: ImageDetailsDialogueComponent;
  let fixture: ComponentFixture<ImageDetailsDialogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageDetailsDialogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageDetailsDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
