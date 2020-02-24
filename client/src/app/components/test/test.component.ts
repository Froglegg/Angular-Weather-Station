import { Component, OnInit, Input } from "@angular/core";
import { WeatherService } from "../../services/weather.service";
@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  @Input() response;
  @Input() result;
  @Input() weather;
  ngOnInit(): void {}

  async fire() {
    let result = await fetch("/api/hello", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    });

    const body = await result.json();
    console.log(body);
    return (this.response = body);
  }

  test(): void {
    this.weatherService
      .test()
      .subscribe(result => (console.log(result), (this.result = result)));
  }

  getWeather(): void {
    this.weatherService
      .getWeather()
      .subscribe(result => (this.weather = result));
  }
}
