import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../app/components/login/login.component";
import { SignUpComponent } from "../app/components/sign-up/sign-up.component";
import { WeatherDashComponent } from "../app/components/weather-dash/weather-dash.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "dashboard", component: WeatherDashComponent },
  { path: "", redirectTo: "/dashboard", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
