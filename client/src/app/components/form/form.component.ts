import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Output() weatherEvent = new EventEmitter<Event>();

  ngOnInit(): void {}
  getWeather(locality, country): void {
    this.weatherService.getWeather(locality, country).subscribe(result => {
      this.weatherEvent.emit(result);
    });
  }
}
