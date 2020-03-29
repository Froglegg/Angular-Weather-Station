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
  @Input() weatherIcon;
  @Input() location: Location;
  @Input() noData: boolean;
  @Input() loading: boolean;

  ngOnInit(): void {}
}
