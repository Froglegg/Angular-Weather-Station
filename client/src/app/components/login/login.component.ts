import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "./user";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  model: User = new User("", "");
  submitted = false;
  badLogin = false;
  serverError = false;

  onSubmit() {
    this.submitted = true;
    this.userService.login(this.model).subscribe((res) => {
      if (res.status === 200) {
        this.router.navigate(["/"]);
        this.submitted = false;
      } else if (res.status === 401) {
        this.badLogin = true;
        this.submitted = false;
      } else {
        console.log("500 maybe ?");
        this.serverError = true;
        this.submitted = false;
      }
    });
  }

  clearForm() {
    this.model = new User("", "");
  }
  ngOnInit(): void {}
}
