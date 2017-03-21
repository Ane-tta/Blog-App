import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePostComponent } from './page-post.component';

describe('PagePostComponent', () => {
  let component: PagePostComponent;
  let fixture: ComponentFixture<PagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
