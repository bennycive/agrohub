import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {


    // To manage the visibility of the sidebar
  isSidebarVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  // Method to toggle the sidebar visibility
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }


}
