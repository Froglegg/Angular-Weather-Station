import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "./user";

import { Router } from "@angular/router";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  model: User = new User("", "", "", "");

  submitted = false;

  emailConflict = false;

  serverError = false;

  passwordConfirmation = false;

  onSubmit() {
    this.submitted = true;
    this.userService.signUp(this.model).subscribe((res) => {
      if (res.status === 200) {
        this.router.navigate(["/"]);
        this.submitted = false;
      } else if (res.status === 409) {
        this.emailConflict = true;
        this.submitted = false;
      } else {
        console.log("500 maybe ?");
        this.serverError = true;
        this.submitted = false;
      }
    });
  }

  clearForm() {
    this.model = new User("", "", "", "");
  }
  ngOnInit(): void {}
}
