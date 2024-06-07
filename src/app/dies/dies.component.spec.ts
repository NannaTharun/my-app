import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiesComponent } from './dies.component';

describe('DiesComponent', () => {
  let component: DiesComponent;
  let fixture: ComponentFixture<DiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
