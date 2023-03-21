import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcesionarioDetailComponent } from './concesionario-detail.component';

describe('ConcesionarioDetailComponent', () => {
  let component: ConcesionarioDetailComponent;
  let fixture: ComponentFixture<ConcesionarioDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcesionarioDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcesionarioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
