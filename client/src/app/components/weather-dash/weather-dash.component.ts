import { Component, OnInit } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";
import { LocationStrategy } from "@angular/common";

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
    console.log(`fired, removing ${location.locality}`);
    console.log(this.locations);
    this.locations = this.locations.filter(l => {
      return l.locality !== location.locality;
    });
    console.log(this.locations);
  }

  ngOnInit(): void {
    this.locations = [];
  }
}
