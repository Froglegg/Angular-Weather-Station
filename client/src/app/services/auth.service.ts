import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor() {}
  jwtHelper = new JwtHelperService();
  public async notAuthenticated(): Promise<boolean> {
    let result = await fetch("/api/users/me")
      .then(response => {
        // if not authorized status, aka, the token is no longer in the session because the user logged out
        if (response.status === 401) {
          return response;
        } else {
          return response.json();
        }
      })
      .then(data => {
        if (data.status === 401) {
          return true;
        } else if (data.token) {
          return this.jwtHelper.isTokenExpired(data.token);
        } else {
          return true;
        }
      })
      .catch(err => console.log(err));
    // if result is truthy, the token is not authenticated
    if (result) {
      return true;
    } else {
      return false;
    }
  }
}
