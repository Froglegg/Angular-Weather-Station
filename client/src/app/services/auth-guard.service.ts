import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
@Injectable({
  providedIn: "root"
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  async canActivate(): Promise<boolean> {
    let result = await this.auth.notAuthenticated();
    if (result) {
      // console.log("TOKEN IS EXPIRED OR DOESN'T EXIST");
      this.router.navigate(["login"]);
      return false;
    } else {
      // console.log("IS AUTHENTICATED");
      return true;
    }
  }
}
