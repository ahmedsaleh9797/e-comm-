import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorydetailsComponent } from './categorydetails.component';

describe('CategorydetailsComponent', () => {
  let component: CategorydetailsComponent;
  let fixture: ComponentFixture<CategorydetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorydetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorydetailsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
