import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css'],
})
export class PhoneComponent implements OnInit {
  phone = {
    marque: 'Samsung',
    modele: 'A51',
    photo: 'assets/sumphone.jpg',
    prix: 1150,
  };
  onSubmit() {
    alert('phone price is ' + this.phone.prix);
  }
  constructor() {}

  ngOnInit(): void {}
}
