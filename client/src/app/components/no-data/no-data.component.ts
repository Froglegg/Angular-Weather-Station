import { Component, OnInit, Input } from "@angular/core";
import { Location } from "../../interfaces/location";
@Component({
  selector: "app-no-data",
  templateUrl: "./no-data.component.html",
  styleUrls: ["./no-data.component.css"]
})
export class NoDataComponent implements OnInit {
  @Input() location: Location;

  constructor() {}

  ngOnInit(): void {}
}
