import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";
import { WeatherService } from "../../services/weather.service";
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  @Input() locations: Location[];

  @Output() weatherEvent = new EventEmitter<Weather>();
  @Output() locationEvent = new EventEmitter<Location>();
  @Output() removeLocationEvent = new EventEmitter<Location>();

  onGetWeather(locality, country): void {
    let location = { locality, country };
    this.weatherService.getWeather(locality, country).subscribe(result => {
      this.weatherEvent.emit(result);
      this.locationEvent.emit(location);
    });
  }

  onRemoveLocation(locality, country): void {
    let location = { locality, country };
    this.removeLocationEvent.emit(location);
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}
}
