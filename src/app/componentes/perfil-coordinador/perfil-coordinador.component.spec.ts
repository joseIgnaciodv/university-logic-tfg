import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCoordinadorComponent } from './perfil-coordinador.component';

describe('PerfilCoordinadorComponent', () => {
  let component: PerfilCoordinadorComponent;
  let fixture: ComponentFixture<PerfilCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
