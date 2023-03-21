import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioListComponent } from './concesionario-list.component';

describe('ConcesionarioListComponent', () => {
  let component: ConcesionarioListComponent;
  let fixture: ComponentFixture<ConcesionarioListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcesionarioListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcesionarioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
