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
  @Output() loadingEvent = new EventEmitter<boolean>();

  @Input() userId;

  ngOnInit(): void {}

  onGetWeather(location: Location): void {
    location.user = this.userId;
    this.loadingEvent.emit(true);
    fetch("/api/locations", {
      method: "POST",
      body: JSON.stringify(location),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => {
        res.json().then(response => {
          this.weatherService.getWeather(response).subscribe(result => {
            console.log(result);
            this.loadingEvent.emit(false);
            if (!result.noData) {
              this.weatherEvent.emit(result);
              this.locationEvent.emit(response);
              this.noDataEvent.emit(false);
            } else {
              this.noDataEvent.emit(true);
              this.locationEvent.emit(response);
            }
          });
        });
      })
      .catch(err => console.log(err));
  }

  // onKeyUp(event) {
  //   event.prevent.default();
  //   console.log(event);
  //   if (event.key === "Enter") {
  //     console.log(event);
  //   }
  // }
  testFunction() {
    alert("HEY");
  }
}
