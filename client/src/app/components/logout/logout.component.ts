import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-logout",
  templateUrl: "./logout.component.html",
  styleUrls: ["./logout.component.css"]
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  public logoutAll() {
    fetch("api/users/me/logoutall", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.seshDestroyed) {
          this.router.navigate(["/login"]);
        }
      })
      .catch(err => console.log(err));
  }

  public logout() {
    fetch("api/users/me/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => response.json())
      .then(data => {
        if (data.seshDestroyed) {
          this.router.navigate(["/login"]);
        }
      })
      .catch(err => console.log(err));
  }

  ngOnInit(): void {}
}
