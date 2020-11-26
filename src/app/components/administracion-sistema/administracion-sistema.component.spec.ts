import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministracionSistemaComponent } from './administracion-sistema.component';

describe('AdministracionSistemaComponent', () => {
  let component: AdministracionSistemaComponent;
  let fixture: ComponentFixture<AdministracionSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministracionSistemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministracionSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
