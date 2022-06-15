import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogoCerrarComponent } from './dialogo-cerrar.component';

describe('DialogoCerrarComponent', () => {
  let component: DialogoCerrarComponent;
  let fixture: ComponentFixture<DialogoCerrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogoCerrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogoCerrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
