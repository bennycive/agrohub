import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  isMenuVisible: boolean = false;
  isMenuOpen: any;

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }


}
