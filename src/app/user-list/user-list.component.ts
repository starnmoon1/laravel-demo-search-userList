import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';
import {UserServiceService} from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  showImg = true;
  keyword: any;
  count;

  usersFilter: IUser[] = [];

  constructor(private userServiceService: UserServiceService) {
  }

  users = this.userServiceService.users;

  ngOnInit(): void {
    this.usersFilter = this.users;
  }

  search(event) {
    this.keyword = event.toLowerCase();
    this.usersFilter = this.users.filter(users => users.name.toLowerCase().includes(this.keyword));
    this.count = this.usersFilter.length;
    if (this.users.length === 0) {
      this.usersFilter = this.users;
    }
  }

  showImage() {
    this.showImg = !this.showImg;
  }

}
