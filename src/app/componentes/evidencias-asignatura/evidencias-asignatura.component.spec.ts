import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasAsignaturaComponent } from './evidencias-asignatura.component';

describe('EvidenciasAsignaturaComponent', () => {
  let component: EvidenciasAsignaturaComponent;
  let fixture: ComponentFixture<EvidenciasAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciasAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciasAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
