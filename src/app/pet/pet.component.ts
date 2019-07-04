import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  url_image = 'https://www.thukieng.com/wp-content/uploads/2016/01/hinh-anh-cho-alaska-dep-5.jpg';
  name = 'dog';

  constructor() { }
  ngOnInit() {
  }

  changeImage(value) {
    this.url_image = value;
  }

  changeName(value) {
    this.name = value;
  }
}
