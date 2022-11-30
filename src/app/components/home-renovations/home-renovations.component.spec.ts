import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRenovationsComponent } from './home-renovations.component';

describe('HomeRenovationsComponent', () => {
  let component: HomeRenovationsComponent;
  let fixture: ComponentFixture<HomeRenovationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRenovationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRenovationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
