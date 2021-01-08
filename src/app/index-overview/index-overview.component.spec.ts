import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOverviewComponent } from './index-overview.component';

describe('IndexOverviewComponent', () => {
  let component: IndexOverviewComponent;
  let fixture: ComponentFixture<IndexOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
