// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-crops',
//   imports: [],
//   templateUrl: './crops.component.html',
//   styleUrl: './crops.component.css'
// })
// export class CropsComponent {

// }


import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-crops',
  templateUrl: './crops.component.html',
  styleUrls: ['./crops.component.css'],
  imports: [CommonModule, FooterComponent, HeaderComponent],
})
export class CropsComponent implements OnInit {
  crops = [
    { name: 'Wheat', description: 'A cereal grain cultivated for its seed.', image: 'assets/crops/crop1.jpg' },
    { name: 'Rice', description: 'A staple food crop, often grown in flooded fields.', image: 'assets/crops/crop2.jpg' },
    { name: 'Maize', description: 'A widely grown cereal crop used as food and for livestock feed.', image: 'assets/crops/crop5.jpg' },
    { name: 'Maize', description: 'A widely grown cereal crop used as food and for livestock feed.', image: 'assets/crops/crop3.jpg' },
    { name: 'Maize', description: 'A widely grown cereal crop used as food and for livestock feed.', image: 'assets/crops/crop6.jpg' },
    { name: 'Maize', description: 'A widely grown cereal crop used as food and for livestock feed.', image: 'assets/crops/crop7.jpg' },
    { name: 'Maize', description: 'A widely grown cereal crop used as food and for livestock feed.', image: 'assets/crops/crop1.jpg' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
