import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDashComponent } from './weather-dash.component';

describe('WeatherDashComponent', () => {
  let component: WeatherDashComponent;
  let fixture: ComponentFixture<WeatherDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
