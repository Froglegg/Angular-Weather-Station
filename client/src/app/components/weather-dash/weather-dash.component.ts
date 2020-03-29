import { Component, OnInit } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";
import { WeatherService } from "../../services/weather.service";

@Component({
  selector: "app-weather-dash",
  templateUrl: "./weather-dash.component.html",
  styleUrls: ["./weather-dash.component.css"]
})
export class WeatherDashComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  weather: Weather[];
  location: Location;
  firstLocation: Location;
  locations: Location[];
  noData: boolean;
  userId: string;
  userName: string;
  loading: boolean;

  getWeather(weather: Weather[]) {
    this.weather = weather;
  }

  getLoading(boolean: boolean) {
    this.loading = boolean;
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
    console.log(location);
    fetch(`/api/locations/${location._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    this.locations = this.locations.filter(l => {
      return l.locality !== location.locality;
    });
  }

  noDataEvent(boolean: boolean) {
    this.noData = boolean;
  }

  getUserLocations() {
    fetch("/api/users/me")
      .then(response => response.json())
      .then(data => {
        this.userId = data.id;
        this.userName = data.name;
        fetch(`/api/locations/${data.id}`)
          .then(response => response.json())
          .then(data => {
            this.weatherService.getWeather(data[0]).subscribe(result => {
              if (!result.noData) {
                this.weather = result;
                this.firstLocation = data[0];
                this.location = data[0];
                this.locations = data;
              }
            });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {
    this.locations = [];
    this.getUserLocations();
  }
}
