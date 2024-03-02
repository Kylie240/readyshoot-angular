import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingBannerComponent } from './booking-banner.component';

describe('BookingBannerComponent', () => {
  let component: BookingBannerComponent;
  let fixture: ComponentFixture<BookingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
