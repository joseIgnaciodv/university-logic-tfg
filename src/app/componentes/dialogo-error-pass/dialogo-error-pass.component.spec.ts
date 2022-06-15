import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoErrorPassComponent } from './dialogo-error-pass.component';

describe('DialogoErrorPassComponent', () => {
  let component: DialogoErrorPassComponent;
  let fixture: ComponentFixture<DialogoErrorPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoErrorPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoErrorPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
