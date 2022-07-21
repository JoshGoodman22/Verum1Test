import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSecComponent } from './news-sec.component';

describe('NewsSecComponent', () => {
  let component: NewsSecComponent;
  let fixture: ComponentFixture<NewsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
