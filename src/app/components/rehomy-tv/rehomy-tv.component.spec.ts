import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehomyTvComponent } from './rehomy-tv.component';

describe('RehomyTvComponent', () => {
  let component: RehomyTvComponent;
  let fixture: ComponentFixture<RehomyTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehomyTvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehomyTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
