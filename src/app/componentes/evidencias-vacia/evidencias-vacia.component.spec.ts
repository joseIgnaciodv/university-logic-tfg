import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasVaciaComponent } from './evidencias-vacia.component';

describe('EvidenciasVaciaComponent', () => {
  let component: EvidenciasVaciaComponent;
  let fixture: ComponentFixture<EvidenciasVaciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciasVaciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciasVaciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
