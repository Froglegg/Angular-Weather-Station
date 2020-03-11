import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
import { Location } from "../../interfaces/location";
import { Weather } from "../../interfaces/weather";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Output() weatherEvent = new EventEmitter<Weather>();
  @Output() locationEvent = new EventEmitter<Location>();
  @Output() noDataEvent = new EventEmitter<boolean>();

  ngOnInit(): void {}

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
}
