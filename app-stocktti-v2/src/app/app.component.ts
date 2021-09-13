import { Component, OnInit } from '@angular/core';
import { BroadCastService } from './broadcast.service';
import { TokenStorageService } from './security/_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  username?: string;
  spinner = false;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();

      this.username = user.username;
    }

    BroadCastService.get("spinner").subscribe((spinner: boolean) => {
      this.spinner = spinner;
    })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
