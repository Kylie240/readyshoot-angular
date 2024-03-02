import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBannerComponent } from './easy-banner.component';

describe('EasyBannerComponent', () => {
  let component: EasyBannerComponent;
  let fixture: ComponentFixture<EasyBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EasyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
