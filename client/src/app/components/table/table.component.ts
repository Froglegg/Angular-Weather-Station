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
  @Input() currentLocation: Location;

  @Output() weatherEvent = new EventEmitter<Weather>();
  @Output() locationEvent = new EventEmitter<Location>();
  @Output() removeLocationEvent = new EventEmitter<Location>();
  @Output() noDataEvent = new EventEmitter<boolean>();

  onGetWeather(locality, country): void {
    let location = { locality, country };
    this.weatherService.getWeather(locality, country).subscribe(result => {
      if (!result.dataExists) {
        this.weatherEvent.emit(result);
        this.locationEvent.emit(location);
        this.noDataEvent.emit(false);
      } else {
        this.noDataEvent.emit(true);
        this.locationEvent.emit(location);
      }
    });
  }

  onRemoveLocation(locality, country): void {
    let location = { locality, country };
    this.removeLocationEvent.emit(location);
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    console.log(this.currentLocation);
  }
}
