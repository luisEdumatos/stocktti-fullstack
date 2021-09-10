import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../styles/header.component.css']
})
export class HeaderComponent  {

  constructor(private tokenStorageService: TokenStorageService) { }

  logout(): void {
    const confirma = confirm(`Deseja realmente sair do sistema?`);
    if (confirma) {
      this.tokenStorageService.signOut();
      window.location.reload();
    }
  }
}
