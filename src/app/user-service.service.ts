import { Injectable } from '@angular/core';
import {IUser} from './user/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: IUser[] = [{
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
  ];  constructor() { }

  getAll(): IUser[] {
    return this.users;
  }

  add(user: IUser) {
    this.users.push(user);
  }

}
