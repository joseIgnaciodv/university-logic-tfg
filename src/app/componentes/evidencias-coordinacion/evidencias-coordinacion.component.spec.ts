import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasCoordinacionComponent } from './evidencias-coordinacion.component';

describe('EvidenciasCoordinacionComponent', () => {
  let component: EvidenciasCoordinacionComponent;
  let fixture: ComponentFixture<EvidenciasCoordinacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvidenciasCoordinacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciasCoordinacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
