import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navItems = [
    {
      name: "Profile",
      routerLink: "profile"
    },
    {
      name: "Posts",
      routerLink: "posts"
    },
    {
      name: "CSS",
      routerLink: "css"
    },
    {
      name: "Details",
      routerLink: "technical"
    }
  ]

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigate(["login"]);
    });
  }
}
