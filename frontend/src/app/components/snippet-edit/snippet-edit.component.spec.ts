import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnippetEditComponent } from './snippet-edit.component';


describe('SnippetDetailComponent', () => {
  let component: SnippetEditComponent;
  let fixture: ComponentFixture<SnippetEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnippetEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnippetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
