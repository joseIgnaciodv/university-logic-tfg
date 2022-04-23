import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacionCoordinadorComponent } from './navegacion-coordinador.component';

describe('NavegacionCoordinadorComponent', () => {
  let component: NavegacionCoordinadorComponent;
  let fixture: ComponentFixture<NavegacionCoordinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavegacionCoordinadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavegacionCoordinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
