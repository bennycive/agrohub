import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-preloader',
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})


export class PreloaderComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    window.onload = () => {
      this.isLoading = false;
    };
  }
}
