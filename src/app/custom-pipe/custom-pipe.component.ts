import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.scss']
})
export class CustomPipeComponent implements OnInit {

  products: any = [
    { sno: 1, name: 'Laptop (HP)', price: 'Rs. 85000', availability: 'Available' },
    { sno: 2, name: 'Laptop (DELL', price: 'Rs. 95000', availability: 'Not Available' },
    { sno: 3, name: 'Mouse (DELL)', price: 'Rs. 300', availability: 'Available' },
    { sno: 4, name: 'Mouse (Logitech)', price: 'Rs. 600', availability: 'Not Available' },
    { sno: 5, name: 'CPU', price: 'Rs. 45000', availability: 'Available' },
    { sno: 6, name: 'Keyboard', price: 'Rs. 350', availability: 'Not Available' },
    { sno: 7, name: 'Monitor', price: 'Rs. 15000', availability: 'Available' },
    { sno: 8, name: 'Light Pen', price: 'Rs. 1000', availability: 'Available' },
    { sno: 9, name: 'Print (DELL)', price: 'Rs. 3500', availability: 'Not Available' },
    { sno: 10, name: 'Printer (HP)', price: 'Rs. 4500', availability: 'Available' },
  ];

  nameSearch: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
