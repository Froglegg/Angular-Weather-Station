import { Component, OnInit } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";
import { WeatherService } from "../../services/weather.service";
import { UserService } from "../../services/user.service";
import { LocationsService } from "../../services/locations.service";

@Component({
  selector: "app-weather-dash",
  templateUrl: "./weather-dash.component.html",
  styleUrls: ["./weather-dash.component.css"]
})
export class WeatherDashComponent implements OnInit {
  constructor(
    private weatherService: WeatherService,
    private userService: UserService,
    private locationsService: LocationsService
  ) {}

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
    this.locationsService
      .removeLocation(`${location._id}`)
      .subscribe(result => console.log(result));
    this.locations = this.locations.filter(l => {
      return l.locality !== location.locality;
    });
  }

  noDataEvent(boolean: boolean) {
    this.noData = boolean;
  }

  getUserLocations() {
    this.userService.getdata().subscribe(result => {
      this.userId = result.id;
      this.userName = result.name;
      this.locationsService.getUserLocations(result.id).subscribe(locations => {
        this.firstLocation = locations[0];
        this.location = locations[0];
        this.locations = locations;
        this.weatherService.getWeather(locations[0]).subscribe(weatherData => {
          if (!weatherData.noData) {
            this.weather = weatherData;
          }
        });
      });
    });
  }

  ngOnInit(): void {
    this.locations = [];
    this.getUserLocations();
  }
}
