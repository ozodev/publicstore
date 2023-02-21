import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExploradorSeriesComponent } from './home-explorador-series.component';

describe('HomeExploradorSeriesComponent', () => {
  let component: HomeExploradorSeriesComponent;
  let fixture: ComponentFixture<HomeExploradorSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeExploradorSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeExploradorSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
