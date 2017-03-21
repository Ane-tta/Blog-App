import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoAreaComponent } from './promo-area.component';

describe('PromoAreaComponent', () => {
  let component: PromoAreaComponent;
  let fixture: ComponentFixture<PromoAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
