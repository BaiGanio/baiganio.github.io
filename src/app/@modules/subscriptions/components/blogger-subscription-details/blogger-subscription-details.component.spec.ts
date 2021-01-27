import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggerSubscriptionDetailsComponent } from './blogger-subscription-details.component';

describe('BloggerSubscriptionDetailsComponent', () => {
  let component: BloggerSubscriptionDetailsComponent;
  let fixture: ComponentFixture<BloggerSubscriptionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloggerSubscriptionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggerSubscriptionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
