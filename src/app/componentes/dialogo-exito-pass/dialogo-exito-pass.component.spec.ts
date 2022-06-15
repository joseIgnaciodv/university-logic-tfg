import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoExitoPassComponent } from './dialogo-exito-pass.component';

describe('DialogoExitoPassComponent', () => {
  let component: DialogoExitoPassComponent;
  let fixture: ComponentFixture<DialogoExitoPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoExitoPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoExitoPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
