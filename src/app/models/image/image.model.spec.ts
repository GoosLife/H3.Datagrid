import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageModel } from './image.model';

describe('ImageModel', () => {
  let component: ImageModel;
  let fixture: ComponentFixture<ImageModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageModel]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
