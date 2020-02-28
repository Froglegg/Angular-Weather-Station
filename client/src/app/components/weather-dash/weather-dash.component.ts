import { Component, OnInit } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";

@Component({
  selector: "app-weather-dash",
  templateUrl: "./weather-dash.component.html",
  styleUrls: ["./weather-dash.component.css"]
})
export class WeatherDashComponent implements OnInit {
  constructor() {}

  weather: Weather;
  location: Location;
  locations: Location[];

  getWeather(weather: Weather) {
    console.log(weather);
    this.weather = weather;
  }

  getLocation(location: Location) {
    this.location = location;
    this.locations.push(location);
  }

  ngOnInit(): void {
    this.locations = [
      { locality: "atlanta", country: "USA" },
      { locality: "Boston", country: "USA" }
    ];
  }
}
