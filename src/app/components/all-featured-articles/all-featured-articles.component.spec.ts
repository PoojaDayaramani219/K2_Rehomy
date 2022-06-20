import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeaturedArticlesComponent } from './all-featured-articles.component';

describe('AllFeaturedArticlesComponent', () => {
  let component: AllFeaturedArticlesComponent;
  let fixture: ComponentFixture<AllFeaturedArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllFeaturedArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeaturedArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
