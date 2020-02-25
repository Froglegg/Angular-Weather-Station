import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Input() weather;
  @Input() location;
  ngOnInit(): void {}

  getWeather(locality, country): void {
    this.weatherService
      .getWeather(locality, country)
      .subscribe(
        result => (
          (this.weather = result),
          (this.location = { locality: locality, country: country })
        )
      );
  }
}
