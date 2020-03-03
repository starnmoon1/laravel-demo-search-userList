import { Component, OnInit } from '@angular/core';
import {IUser} from "../user/IUser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showImg = true;
  keyword : any;
  count;
  users : IUser[] = [{
    name : 'Thang',
    address: 'Nam Dinh',
    email : 'dothang@gmail.com',
    phone : 986141742,
    image : 'assets/images/human.png'
  },
    {
      name : 'Quang',
      address: 'bac giang',
      email : 'quangtran@gmail.com',
      phone : 986423442,
      image : 'assets/images/human.png'
    },
    {
      name : 'Long',
      address: 'hung yen',
      email : 'longchua@gmail.com',
      phone : 985723442,
      image : 'assets/images/human.png'
    }
  ];
  usersFilter : IUser[] = [];

  constructor() { }

  ngOnInit(): void {
    this.usersFilter = this.users;
  }
  search(event) {
    this.keyword = event.toLowerCase();
    this.usersFilter = this.users.filter(users=>users.name.toLowerCase().includes(this.keyword));
    this.count = this.usersFilter.length;
    if (this.users.length == 0) {
      this.usersFilter = this.users;
    }
  }
  showImage(){
    this.showImg = !this.showImg;
  }

}
