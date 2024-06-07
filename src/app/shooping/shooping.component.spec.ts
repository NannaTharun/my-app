import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoopingComponent } from './shooping.component';

describe('ShoopingComponent', () => {
  let component: ShoopingComponent;
  let fixture: ComponentFixture<ShoopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoopingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
