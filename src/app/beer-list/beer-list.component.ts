import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  beer = {
    name: "Negra Fuerte",
    style: "Porter",
    price: "$200",
    stock: 20,
    image: "assets/cerveza1.jpg",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
