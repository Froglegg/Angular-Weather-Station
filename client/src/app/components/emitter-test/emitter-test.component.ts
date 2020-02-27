import { Component, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-emitter-test",
  templateUrl: "./emitter-test.component.html",
  styleUrls: ["./emitter-test.component.css"]
})
export class EmitterTestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  story: string;

  @Output() selectStory = new EventEmitter<string>();

  onSelectStory(story: string) {
    this.selectStory.emit(story);
  }
}
