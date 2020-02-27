import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-weather-dash",
  templateUrl: "./weather-dash.component.html",
  styleUrls: ["./weather-dash.component.css"]
})
export class WeatherDashComponent implements OnInit {
  constructor() {}

  weather: any;
  location: any;

  getWeather(weather) {
    console.log(weather);
    this.weather = weather;
  }

  getLocation(location) {
    console.log(location);
    this.location = location;
  }
  ngOnInit(): void {}
}
