import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealsComponent } from './reals.component';

describe('RealsComponent', () => {
  let component: RealsComponent;
  let fixture: ComponentFixture<RealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
