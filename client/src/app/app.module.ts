import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { WeatherViewComponent } from "../app/components/weather-view/weather-view.component";
import { WeatherDashComponent } from "../app/components/weather-dash/weather-dash.component";
import { FormComponent } from "../app/components/form/form.component";
import { TableComponent } from "../app/components/table/table.component";
import { LoginComponent } from "../app/components/login/login.component";
import { SignUpComponent } from "../app/components/sign-up/sign-up.component";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LogoutComponent } from "./components/logout/logout.component";
import { SkyconsModule } from "ngx-skycons";
import { HeroFormComponent } from "./components/test-form/test-form.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    WeatherViewComponent,
    WeatherDashComponent,
    FormComponent,
    TableComponent,
    LoginComponent,
    SignUpComponent,
    LogoutComponent,
    HeroFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    SkyconsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
