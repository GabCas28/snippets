import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnippetIconComponent } from './snippet-icon.component';

describe('SnippetIconComponent', () => {
  let component: SnippetIconComponent;
  let fixture: ComponentFixture<SnippetIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
