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

  weather: Weather[];
  location: Location;
  locations: Location[];
  noData: boolean;

  getWeather(weather: Weather[]) {
    this.weather = weather;
  }

  getLocation(location: Location) {
    this.location = location;
    this.locations.some(
      loc => loc["locality"].toLowerCase() === location.locality.toLowerCase()
    )
      ? null
      : this.locations.push(location);
  }

  removeLocation(location: Location) {
    this.locations = this.locations.filter(l => {
      return l.locality !== location.locality;
    });
  }

  noDataEvent(boolean: boolean) {
    this.noData = boolean;
  }

  ngOnInit(): void {
    this.locations = [];
  }
}
