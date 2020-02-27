import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { TestComponent } from "../app/components/test/test.component";
import { WeatherViewComponent } from "../app/components/weather-view/weather-view.component";
import { WeatherDashComponent } from "../app/components/weather-dash/weather-dash.component";
import { FormComponent } from "../app/components/form/form.component";
import { TableComponent } from "../app/components/table/table.component";
import { EmitterTestComponent } from "../app/components/emitter-test/emitter-test.component";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    WeatherViewComponent,
    WeatherDashComponent,
    FormComponent,
    TableComponent,
    EmitterTestComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
