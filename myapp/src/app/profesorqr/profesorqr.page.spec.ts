import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorqrPage } from './profesorqr.page';

describe('ProfesorqrPage', () => {
  let component: ProfesorqrPage;
  let fixture: ComponentFixture<ProfesorqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfesorqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
