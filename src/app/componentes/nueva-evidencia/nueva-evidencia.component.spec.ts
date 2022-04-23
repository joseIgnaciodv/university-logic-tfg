import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaEvidenciaComponent } from './nueva-evidencia.component';

describe('NuevaEvidenciaComponent', () => {
  let component: NuevaEvidenciaComponent;
  let fixture: ComponentFixture<NuevaEvidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaEvidenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaEvidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
