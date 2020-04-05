import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  public logoutAll() {
    this.userService.logOutAll().subscribe((res) => {
      if (res.seshDestroyed) {
        this.router.navigate(["/login"]);
      }
    });
  }

  public logout() {
    this.userService.logOut().subscribe((res) => {
      if (res.seshDestroyed) {
        this.router.navigate(["/login"]);
      }
    });
  }

  ngOnInit(): void {}
}
