import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";

@Component({
  selector: "app-weather-view",
  templateUrl: "./weather-view.component.html",
  styleUrls: ["./weather-view.component.css"]
})
export class WeatherViewComponent implements OnInit {
  constructor() {}

  @Input() weather: Weather[];
  @Input() location: Location;

  ngOnInit(): void {
    console.log(this.location);
  }
}
