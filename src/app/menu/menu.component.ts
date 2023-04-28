import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() theme: string = 'dark';

  logoutIcon = faArrowRightFromBracket;
  today = new Date();
  avatar = sessionStorage.getItem("avatarUrl");
  logo = "";

  constructor(private router: Router) {}

  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }

  goToHome() {
    this.router.navigate(['home']);
  }

}
